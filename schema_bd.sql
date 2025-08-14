-- ============================================================
-- IntraSphere - Schéma MySQL (cPanel-ready)
-- Objectif: fournir un script SQL fidèle à la structure de la BD
-- utilisée par le projet afin de créer les tables sur MySQL.
-- 
-- Remarques:
-- - Jeu de caractères: utf8mb4 pour supporter les emojis.
-- - Moteur de tables: InnoDB (FK, transactions).
-- - Les types "boolean" sont mappés sur TINYINT(1).
-- - Les colonnes TEXT indexées dans le code ont été ramenées à VARCHAR
--   pour permettre des index/unique (limites MySQL).
-- - Les colonnes JSON sont stockées en TEXT pour compatibilité large.
-- - Ajoutez/retirez les contraintes FOREIGN KEY selon vos besoins
--   (certaines références non-critiques sont optionnelles).
-- ============================================================

SET NAMES utf8mb4;
SET time_zone = '+00:00';

-- Optionnel: activer/désactiver les FK pendant la création
-- SET FOREIGN_KEY_CHECKS=0;

-- ============================================================
-- Utilisateurs
-- ============================================================
CREATE TABLE IF NOT EXISTS users (
  id            VARCHAR(50)  NOT NULL,
  username      VARCHAR(191) NOT NULL,
  password      TEXT         NOT NULL,
  name          VARCHAR(255) NOT NULL,
  role          ENUM('employee','admin','moderator') NOT NULL DEFAULT 'employee',
  avatar        TEXT NULL,
  employee_id   VARCHAR(50) UNIQUE,
  department    VARCHAR(255),
  position      VARCHAR(255),
  is_active     TINYINT(1)   NOT NULL DEFAULT 1,
  phone         VARCHAR(50),
  email         VARCHAR(255),
  created_at    TIMESTAMP    NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP    NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_users_username (username),
  UNIQUE KEY uq_users_employee_id (employee_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Table des sessions (express-mysql-session)
-- ============================================================
CREATE TABLE IF NOT EXISTS sessions (
  session_id VARCHAR(128) COLLATE utf8mb4_bin NOT NULL,
  expires    INT(11) UNSIGNED NOT NULL,
  data       MEDIUMTEXT,
  PRIMARY KEY (session_id),
  KEY idx_sessions_expires (expires)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ============================================================
-- Annonces
-- ============================================================
CREATE TABLE IF NOT EXISTS announcements (
  id            VARCHAR(50)  NOT NULL,
  title         VARCHAR(255) NOT NULL,
  content       TEXT         NOT NULL,
  type          ENUM('info','important','event','formation') NOT NULL DEFAULT 'info',
  author_id     VARCHAR(50)  NULL,
  author_name   VARCHAR(255) NOT NULL,
  image_url     TEXT NULL,
  icon          VARCHAR(10)  DEFAULT '📢',
  created_at    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  is_important  TINYINT(1)   NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  KEY idx_announcements_author_id (author_id),
  CONSTRAINT fk_announcements_author
    FOREIGN KEY (author_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Documents
-- ============================================================
CREATE TABLE IF NOT EXISTS documents (
  id          VARCHAR(50)  NOT NULL,
  title       VARCHAR(255) NOT NULL,
  description TEXT NULL,
  category    ENUM('regulation','policy','guide','procedure') NOT NULL,
  file_name   VARCHAR(255) NOT NULL,
  file_url    TEXT         NOT NULL,
  updated_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  version     VARCHAR(20)  NOT NULL DEFAULT '1.0',
  PRIMARY KEY (id),
  KEY idx_documents_category (category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Événements
-- ============================================================
CREATE TABLE IF NOT EXISTS events (
  id            VARCHAR(50)  NOT NULL,
  title         VARCHAR(255) NOT NULL,
  description   TEXT NULL,
  date          DATETIME     NOT NULL,
  location      VARCHAR(255),
  type          ENUM('meeting','training','social','other') NOT NULL DEFAULT 'meeting',
  organizer_id  VARCHAR(50) NULL,
  created_at    TIMESTAMP    NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_events_organizer_id (organizer_id),
  CONSTRAINT fk_events_organizer
    FOREIGN KEY (organizer_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Messagerie interne
-- ============================================================
CREATE TABLE IF NOT EXISTS messages (
  id            VARCHAR(50)  NOT NULL,
  sender_id     VARCHAR(50)  NOT NULL,
  recipient_id  VARCHAR(50)  NOT NULL,
  subject       VARCHAR(255) NOT NULL,
  content       TEXT         NOT NULL,
  is_read       TINYINT(1)   NOT NULL DEFAULT 0,
  created_at    TIMESTAMP    NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_messages_sender (sender_id),
  KEY idx_messages_recipient (recipient_id),
  CONSTRAINT fk_messages_sender
    FOREIGN KEY (sender_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_messages_recipient
    FOREIGN KEY (recipient_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Réclamations / Suggestions
-- ============================================================
CREATE TABLE IF NOT EXISTS complaints (
  id             VARCHAR(50)  NOT NULL,
  submitter_id   VARCHAR(50)  NOT NULL,
  assigned_to_id VARCHAR(50)  NULL,
  title          VARCHAR(255) NOT NULL,
  description    TEXT         NOT NULL,
  type           ENUM('complaint','suggestion','technical','hr','other') NOT NULL DEFAULT 'complaint',
  priority       ENUM('low','medium','high','urgent') NOT NULL DEFAULT 'medium',
  status         ENUM('open','in_progress','resolved','closed') NOT NULL DEFAULT 'open',
  created_at     TIMESTAMP    NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at     TIMESTAMP    NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_complaints_submitter (submitter_id),
  KEY idx_complaints_assigned (assigned_to_id),
  CONSTRAINT fk_complaints_submitter
    FOREIGN KEY (submitter_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_complaints_assigned
    FOREIGN KEY (assigned_to_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Permissions (catalogue)
-- ============================================================
CREATE TABLE IF NOT EXISTS permissions (
  id          VARCHAR(50)  NOT NULL,
  name        VARCHAR(255) NOT NULL,
  description TEXT,
  module      VARCHAR(100),   -- auth, content, messaging, training, admin
  action      VARCHAR(100),   -- read, write, delete, manage
  created_at  TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_permissions_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Attribution de permissions aux utilisateurs
CREATE TABLE IF NOT EXISTS user_permissions (
  id             VARCHAR(50) NOT NULL,
  user_id        VARCHAR(50) NOT NULL,
  permission_id  VARCHAR(50) NOT NULL,
  granted_at     TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  granted_by     VARCHAR(50),
  PRIMARY KEY (id),
  KEY idx_user_permissions_user (user_id),
  KEY idx_user_permissions_perm (permission_id),
  CONSTRAINT fk_user_permissions_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_user_permissions_perm
    FOREIGN KEY (permission_id) REFERENCES permissions(id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Formations (catalogue)
-- ============================================================
CREATE TABLE IF NOT EXISTS trainings (
  id             VARCHAR(50)  NOT NULL,
  title          VARCHAR(255) NOT NULL,
  description    TEXT,
  category       VARCHAR(100),
  difficulty     ENUM('beginner','intermediate','advanced') NOT NULL DEFAULT 'beginner',
  duration       INT, -- minutes
  instructor_id  VARCHAR(50),
  is_active      TINYINT(1) NOT NULL DEFAULT 1,
  created_at     TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at     TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_trainings_instructor (instructor_id),
  CONSTRAINT fk_trainings_instructor
    FOREIGN KEY (instructor_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inscription/avancement aux formations
CREATE TABLE IF NOT EXISTS training_enrollments (
  id            VARCHAR(50) NOT NULL,
  user_id       VARCHAR(50) NOT NULL,
  training_id   VARCHAR(50) NOT NULL,
  status        ENUM('enrolled','in_progress','completed','dropped') NOT NULL DEFAULT 'enrolled',
  progress      DECIMAL(5,2) NOT NULL DEFAULT 0.00,
  completed_at  TIMESTAMP NULL,
  enrolled_at   TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_training_enrollments_user (user_id),
  KEY idx_training_enrollments_training (training_id),
  CONSTRAINT fk_training_enrollments_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_training_enrollments_training
    FOREIGN KEY (training_id) REFERENCES trainings(id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Contenus multimédia
-- ============================================================
CREATE TABLE IF NOT EXISTS contents (
  id            VARCHAR(50)  NOT NULL,
  title         VARCHAR(255) NOT NULL,
  type          VARCHAR(50)  NOT NULL,      -- video, image, document, audio
  category      VARCHAR(100) NOT NULL,
  description   TEXT,
  file_url      TEXT NOT NULL,
  thumbnail_url TEXT,
  duration      VARCHAR(50),
  view_count    INT          NOT NULL DEFAULT 0,
  rating        INT          NOT NULL DEFAULT 0,
  tags          TEXT,                           -- JSON (texte)
  is_popular    TINYINT(1)   NOT NULL DEFAULT 0,
  is_featured   TINYINT(1)   NOT NULL DEFAULT 0,
  created_at    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_contents_category (category),
  KEY idx_contents_type (type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Catégories (générales)
CREATE TABLE IF NOT EXISTS categories (
  id          VARCHAR(50)  NOT NULL,
  name        VARCHAR(255) NOT NULL,
  description TEXT,
  icon        VARCHAR(50)  DEFAULT '📁',
  color       VARCHAR(20)  DEFAULT '#3B82F6',
  is_visible  TINYINT(1)   NOT NULL DEFAULT 1,
  sort_order  INT          NOT NULL DEFAULT 0,
  created_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_categories_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Catégories d'employés (permissions groupées)
CREATE TABLE IF NOT EXISTS employee_categories (
  id           VARCHAR(50)  NOT NULL,
  name         VARCHAR(255) NOT NULL,
  description  TEXT,
  color        VARCHAR(20)  DEFAULT '#10B981',
  permissions  TEXT,               -- JSON (texte)
  is_active    TINYINT(1) NOT NULL DEFAULT 1,
  created_at   TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_employee_categories_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Paramètres système (toggles de modules)
CREATE TABLE IF NOT EXISTS system_settings (
  id                    VARCHAR(50) NOT NULL DEFAULT 'settings',
  show_announcements    TINYINT(1)  NOT NULL DEFAULT 1,
  show_content          TINYINT(1)  NOT NULL DEFAULT 1,
  show_documents        TINYINT(1)  NOT NULL DEFAULT 1,
  show_forum            TINYINT(1)  NOT NULL DEFAULT 1,
  show_messages         TINYINT(1)  NOT NULL DEFAULT 1,
  show_complaints       TINYINT(1)  NOT NULL DEFAULT 1,
  show_training         TINYINT(1)  NOT NULL DEFAULT 1,
  updated_at            TIMESTAMP   NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Bibliothèque de ressources
-- ============================================================
CREATE TABLE IF NOT EXISTS resources (
  id            VARCHAR(50)  NOT NULL,
  title         VARCHAR(255) NOT NULL,
  description   TEXT,
  category      VARCHAR(100) NOT NULL,   -- documentation, template, guide, reference
  type          VARCHAR(50)  NOT NULL,   -- pdf, video, link, document
  url           TEXT         NOT NULL,
  thumbnail_url TEXT,
  author_id     VARCHAR(50),
  author_name   VARCHAR(255) NOT NULL,
  tags          TEXT,                    -- JSON (texte)
  download_count INT        NOT NULL DEFAULT 0,
  rating        FLOAT       NOT NULL DEFAULT 0,
  is_public     TINYINT(1)  NOT NULL DEFAULT 1,
  created_at    TIMESTAMP   NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP   NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_resources_category (category),
  KEY idx_resources_type (type),
  CONSTRAINT fk_resources_author
    FOREIGN KEY (author_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- E-Learning: Cours, Leçons, Quiz, Suivi
-- ============================================================
CREATE TABLE IF NOT EXISTS courses (
  id            VARCHAR(50)  NOT NULL,
  title         VARCHAR(255) NOT NULL,
  description   TEXT,
  category      VARCHAR(100) NOT NULL, -- technical, compliance, soft-skills, leadership
  difficulty    VARCHAR(50)  NOT NULL DEFAULT 'beginner',
  duration      INT,
  thumbnail_url TEXT,
  author_id     VARCHAR(50),
  author_name   VARCHAR(255) NOT NULL,
  is_published  TINYINT(1)   NOT NULL DEFAULT 0,
  is_mandatory  TINYINT(1)   NOT NULL DEFAULT 0,
  prerequisites TEXT,                  -- JSON (texte)
  tags          TEXT,                  -- JSON (texte)
  created_at    TIMESTAMP    NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP    NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_courses_category (category),
  CONSTRAINT fk_courses_author
    FOREIGN KEY (author_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS lessons (
  id           VARCHAR(50)  NOT NULL,
  course_id    VARCHAR(50)  NOT NULL,
  title        VARCHAR(255) NOT NULL,
  description  TEXT,
  content      LONGTEXT     NOT NULL,
  `order`      INT          NOT NULL DEFAULT 0,
  duration     INT,
  video_url    TEXT,
  document_url TEXT,
  is_required  TINYINT(1)   NOT NULL DEFAULT 1,
  created_at   TIMESTAMP    NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP    NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_lessons_course (course_id),
  CONSTRAINT fk_lessons_course
    FOREIGN KEY (course_id) REFERENCES courses(id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS quizzes (
  id            VARCHAR(50)  NOT NULL,
  course_id     VARCHAR(50)  NULL,
  lesson_id     VARCHAR(50)  NULL,
  title         VARCHAR(255) NOT NULL,
  description   TEXT,
  questions     LONGTEXT     NOT NULL, -- JSON (texte)
  passing_score INT          NOT NULL DEFAULT 70,
  time_limit    INT,
  allow_retries TINYINT(1)   NOT NULL DEFAULT 1,
  max_attempts  INT          NOT NULL DEFAULT 3,
  is_required   TINYINT(1)   NOT NULL DEFAULT 0,
  created_at    TIMESTAMP    NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP    NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_quizzes_course (course_id),
  KEY idx_quizzes_lesson (lesson_id),
  CONSTRAINT fk_quizzes_course
    FOREIGN KEY (course_id) REFERENCES courses(id)
    ON UPDATE CASCADE ON DELETE SET NULL,
  CONSTRAINT fk_quizzes_lesson
    FOREIGN KEY (lesson_id) REFERENCES lessons(id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS enrollments (
  id            VARCHAR(50) NOT NULL,
  user_id       VARCHAR(50) NOT NULL,
  course_id     VARCHAR(50) NOT NULL,
  enrolled_at   TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  started_at    TIMESTAMP NULL,
  completed_at  TIMESTAMP NULL,
  progress      INT NOT NULL DEFAULT 0,
  status        VARCHAR(50) NOT NULL DEFAULT 'enrolled',
  certificate_url TEXT,
  PRIMARY KEY (id),
  KEY idx_enrollments_user (user_id),
  KEY idx_enrollments_course (course_id),
  CONSTRAINT fk_enrollments_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_enrollments_course
    FOREIGN KEY (course_id) REFERENCES courses(id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS lesson_progress (
  id           VARCHAR(50) NOT NULL,
  user_id      VARCHAR(50) NOT NULL,
  lesson_id    VARCHAR(50) NOT NULL,
  course_id    VARCHAR(50) NOT NULL,
  is_completed TINYINT(1)  NOT NULL DEFAULT 0,
  time_spent   INT         NOT NULL DEFAULT 0,
  completed_at TIMESTAMP NULL,
  created_at   TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_progress_user (user_id),
  KEY idx_progress_lesson (lesson_id),
  KEY idx_progress_course (course_id),
  CONSTRAINT fk_progress_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_progress_lesson
    FOREIGN KEY (lesson_id) REFERENCES lessons(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_progress_course
    FOREIGN KEY (course_id) REFERENCES courses(id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS quiz_attempts (
  id             VARCHAR(50) NOT NULL,
  user_id        VARCHAR(50) NOT NULL,
  quiz_id        VARCHAR(50) NOT NULL,
  course_id      VARCHAR(50) NOT NULL,
  answers        LONGTEXT    NOT NULL, -- JSON (texte)
  score          INT,
  passed         TINYINT(1)  NOT NULL DEFAULT 0,
  attempt_number INT         NOT NULL DEFAULT 1,
  time_spent     INT,
  completed_at   TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_quizattempts_user (user_id),
  KEY idx_quizattempts_quiz (quiz_id),
  KEY idx_quizattempts_course (course_id),
  CONSTRAINT fk_quizattempts_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_quizattempts_quiz
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_quizattempts_course
    FOREIGN KEY (course_id) REFERENCES courses(id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS certificates (
  id            VARCHAR(50) NOT NULL,
  user_id       VARCHAR(50) NOT NULL,
  course_id     VARCHAR(50) NOT NULL,
  title         VARCHAR(255) NOT NULL,
  description   TEXT,
  certificate_url TEXT,
  valid_until   TIMESTAMP NULL,
  issued_at     TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_certificates_user (user_id),
  KEY idx_certificates_course (course_id),
  CONSTRAINT fk_certificates_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_certificates_course
    FOREIGN KEY (course_id) REFERENCES courses(id)
    ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Forum
-- ============================================================
CREATE TABLE IF NOT EXISTS forum_categories (
  id           VARCHAR(50)  NOT NULL,
  name         VARCHAR(255) NOT NULL,
  description  TEXT,
  color        VARCHAR(20)  DEFAULT '#3B82F6',
  icon         VARCHAR(50)  DEFAULT '💬',
  sort_order   INT          NOT NULL DEFAULT 0,
  is_active    TINYINT(1)   NOT NULL DEFAULT 1,
  is_moderated TINYINT(1)   NOT NULL DEFAULT 0,
  access_level VARCHAR(50)  NOT NULL DEFAULT 'all', -- all, employee, moderator, admin
  moderator_ids TEXT,                                -- JSON (texte)
  created_at   TIMESTAMP    NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_forum_categories_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS forum_topics (
  id               VARCHAR(50)  NOT NULL,
  category_id      VARCHAR(50)  NOT NULL,
  title            VARCHAR(255) NOT NULL,
  description      TEXT,
  author_id        VARCHAR(50)  NOT NULL,
  author_name      VARCHAR(255) NOT NULL,
  is_pinned        TINYINT(1)   NOT NULL DEFAULT 0,
  is_locked        TINYINT(1)   NOT NULL DEFAULT 0,
  is_announcement  TINYINT(1)   NOT NULL DEFAULT 0,
  view_count       INT          NOT NULL DEFAULT 0,
  reply_count      INT          NOT NULL DEFAULT 0,
  last_reply_at    TIMESTAMP NULL,
  last_reply_by    VARCHAR(50),
  last_reply_by_name VARCHAR(255),
  tags             TEXT,                         -- JSON (texte)
  created_at       TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at       TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_forum_topics_category (category_id),
  KEY idx_forum_topics_author (author_id),
  CONSTRAINT fk_forum_topics_category
    FOREIGN KEY (category_id) REFERENCES forum_categories(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_forum_topics_author
    FOREIGN KEY (author_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_forum_topics_last_reply_by
    FOREIGN KEY (last_reply_by) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS forum_posts (
  id             VARCHAR(50)  NOT NULL,
  topic_id       VARCHAR(50)  NOT NULL,
  category_id    VARCHAR(50)  NOT NULL,
  author_id      VARCHAR(50)  NOT NULL,
