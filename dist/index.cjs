"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc2) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc2 = __getOwnPropDesc(from, key)) || desc2.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server/testData.ts
var testData_exports = {};
__export(testData_exports, {
  createTestData: () => createTestData,
  getTestDataStats: () => getTestDataStats,
  testAnnouncements: () => testAnnouncements,
  testComplaints: () => testComplaints,
  testDocuments: () => testDocuments,
  testEvents: () => testEvents,
  testMessages: () => testMessages,
  testUsers: () => testUsers
});
function createTestData() {
  return {
    users: testUsers,
    announcements: testAnnouncements,
    documents: testDocuments,
    events: testEvents,
    messages: testMessages,
    complaints: testComplaints
  };
}
function getTestDataStats() {
  return {
    totalUsers: testUsers.length,
    totalAnnouncements: testAnnouncements.length,
    totalDocuments: testDocuments.length,
    totalEvents: testEvents.length,
    totalMessages: testMessages.length,
    totalComplaints: testComplaints.length,
    newAnnouncements: testAnnouncements.filter(
      (a) => new Date(a.createdAt).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1e3
    ).length,
    updatedDocuments: testDocuments.filter(
      (d) => new Date(d.updatedAt).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1e3
    ).length,
    connectedUsers: Math.floor(testUsers.length * 0.6),
    // 60% connected
    pendingComplaints: testComplaints.filter((c) => c.status === "open").length
  };
}
var testUsers, testAnnouncements, testDocuments, testEvents, testMessages, testComplaints;
var init_testData = __esm({
  "server/testData.ts"() {
    "use strict";
    testUsers = [
      {
        id: "admin-1",
        username: "admin",
        password: "Admin123!",
        name: "Marie Dupont",
        email: "marie.dupont@intrasphere.fr",
        department: "Direction",
        position: "Directrice G\xE9n\xE9rale",
        phone: "01 23 45 67 89",
        role: "admin",
        employeeId: "EMP001",
        avatar: null,
        isActive: true,
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1e3)
      },
      {
        id: "mod-1",
        username: "moderator",
        password: "Mod123!",
        name: "Pierre Martin",
        email: "pierre.martin@intrasphere.fr",
        department: "Ressources Humaines",
        position: "Responsable RH",
        phone: "01 23 45 67 90",
        role: "moderator",
        employeeId: "EMP002",
        avatar: null,
        isActive: true,
        createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3)
      },
      {
        id: "emp-1",
        username: "employee",
        password: "Emp123!",
        name: "Sophie Bernard",
        email: "sophie.bernard@intrasphere.fr",
        department: "Informatique",
        position: "D\xE9veloppeuse",
        phone: "01 23 45 67 91",
        role: "employee",
        employeeId: "EMP003",
        avatar: null,
        isActive: true,
        createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1e3)
      },
      {
        id: "emp-2",
        username: "jdoe",
        password: "password123",
        name: "Jean Doe",
        email: "jean.doe@intrasphere.fr",
        department: "Marketing",
        position: "Chef de projet",
        phone: "01 23 45 67 92",
        role: "employee",
        employeeId: "EMP004",
        avatar: null,
        isActive: true,
        createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1e3)
      },
      {
        id: "emp-3",
        username: "adurand",
        password: "password123",
        name: "Alice Durand",
        email: "alice.durand@intrasphere.fr",
        department: "Commercial",
        position: "Commerciale",
        phone: "01 23 45 67 93",
        role: "employee",
        employeeId: "EMP005",
        avatar: null,
        isActive: true,
        createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1e3)
      },
      {
        id: "emp-4",
        username: "lrobert",
        password: "password123",
        name: "Lucas Robert",
        email: "lucas.robert@intrasphere.fr",
        department: "Comptabilit\xE9",
        position: "Comptable",
        phone: "01 23 45 67 94",
        role: "employee",
        employeeId: "EMP006",
        avatar: null,
        isActive: true,
        createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1e3)
      }
    ];
    testAnnouncements = [
      {
        id: "ann-1",
        title: "Nouvelle politique de t\xE9l\xE9travail",
        content: "\xC0 partir du 1er f\xE9vrier, tous les employ\xE9s pourront b\xE9n\xE9ficier de 2 jours de t\xE9l\xE9travail par semaine. Cette mesure vise \xE0 am\xE9liorer l'\xE9quilibre vie professionnelle/vie priv\xE9e et \xE0 r\xE9duire les temps de transport. Les demandes doivent \xEAtre valid\xE9es par votre responsable direct.",
        type: "important",
        authorId: "admin-1",
        authorName: "Marie Dupont",
        imageUrl: null,
        icon: "\u{1F4E2}",
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3),
        isImportant: true
      },
      {
        id: "ann-2",
        title: "Formation cybers\xE9curit\xE9 obligatoire",
        content: "Tous les employ\xE9s doivent suivre la formation cybers\xE9curit\xE9 avant le 15 f\xE9vrier. Cette formation en ligne dure 2 heures et couvre les bonnes pratiques de s\xE9curit\xE9 informatique. Un certificat sera d\xE9livr\xE9 \xE0 l'issue de la formation.",
        type: "formation",
        authorId: "mod-1",
        authorName: "Pierre Martin",
        imageUrl: null,
        icon: "\u{1F393}",
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1e3),
        isImportant: false
      },
      {
        id: "ann-3",
        title: "R\xE9union mensuelle - R\xE9sultats Q4",
        content: "La r\xE9union mensuelle aura lieu le vendredi 26 janvier \xE0 14h en salle de conf\xE9rence. Ordre du jour : pr\xE9sentation des r\xE9sultats Q4, objectifs 2024, et questions diverses. La pr\xE9sence de tous les managers est requise.",
        type: "event",
        authorId: "admin-1",
        authorName: "Marie Dupont",
        imageUrl: null,
        icon: "\u{1F4C5}",
        createdAt: new Date(Date.now() - 5 * 60 * 60 * 1e3),
        isImportant: true
      },
      {
        id: "ann-4",
        title: "Nouveaux arrivants - Janvier 2024",
        content: "Nous accueillons trois nouveaux collaborateurs ce mois-ci : Emma Leroy (Marketing), Thomas Petit (IT), et Camille Moreau (Commercial). N'h\xE9sitez pas \xE0 leur souhaiter la bienvenue et \xE0 les aider dans leur int\xE9gration.",
        type: "info",
        authorId: "mod-1",
        authorName: "Pierre Martin",
        imageUrl: null,
        icon: "\u{1F44B}",
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1e3),
        isImportant: false
      },
      {
        id: "ann-5",
        title: "Maintenance serveurs - Weekend du 27-28 janvier",
        content: "Une maintenance programm\xE9e des serveurs aura lieu ce weekend. Des coupures intermittentes sont possibles samedi entre 20h et minuit. Tous les services seront pleinement op\xE9rationnels lundi matin.",
        type: "important",
        authorId: "emp-1",
        authorName: "Sophie Bernard",
        imageUrl: null,
        icon: "\u26A0\uFE0F",
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1e3),
        isImportant: true
      }
    ];
    testDocuments = [
      {
        id: "doc-1",
        title: "Politique de t\xE9l\xE9travail 2024",
        description: "Document officiel d\xE9taillant les nouvelles modalit\xE9s de t\xE9l\xE9travail",
        category: "policy",
        fileName: "politique-teletravail-2024.pdf",
        fileUrl: "/documents/politique-teletravail-2024.pdf",
        updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3),
        version: "2.0"
      },
      {
        id: "doc-2",
        title: "Guide de s\xE9curit\xE9 informatique",
        description: "Bonnes pratiques et proc\xE9dures de s\xE9curit\xE9 pour tous les employ\xE9s",
        category: "guide",
        fileName: "guide-securite-informatique.pdf",
        fileUrl: "/documents/guide-securite-informatique.pdf",
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1e3),
        version: "1.5"
      },
      {
        id: "doc-3",
        title: "Organigramme 2024",
        description: "Structure organisationnelle mise \xE0 jour de l'entreprise",
        category: "organization",
        fileName: "organigramme-2024.pdf",
        fileUrl: "/documents/organigramme-2024.pdf",
        updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1e3),
        version: "3.0"
      },
      {
        id: "doc-4",
        title: "Proc\xE9dures RH - Cong\xE9s et absences",
        description: "Guide complet pour les demandes de cong\xE9s et la gestion des absences",
        category: "procedure",
        fileName: "procedures-conges.pdf",
        fileUrl: "/documents/procedures-conges.pdf",
        updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3),
        version: "1.2"
      }
    ];
    testEvents = [
      {
        id: "evt-1",
        title: "R\xE9union mensuelle \xE9quipe",
        description: "Point mensuel sur les projets en cours et les objectifs",
        date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1e3),
        location: "Salle de conf\xE9rence A",
        type: "meeting",
        organizerId: "admin-1",
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3)
      },
      {
        id: "evt-2",
        title: "Formation cybers\xE9curit\xE9",
        description: "Session de formation obligatoire sur la cybers\xE9curit\xE9",
        date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1e3),
        location: "Salle de formation",
        type: "training",
        organizerId: "mod-1",
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1e3)
      },
      {
        id: "evt-3",
        title: "Pot de bienvenue nouveaux arrivants",
        description: "Moment convivial pour accueillir les nouveaux collaborateurs",
        date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1e3),
        location: "Espace d\xE9tente",
        type: "social",
        organizerId: "mod-1",
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3)
      }
    ];
    testMessages = [
      {
        id: "msg-1",
        subject: "Demande d'information - Projet Alpha",
        content: "Bonjour Sophie,\n\nPourrais-tu me faire un point sur l'avancement du projet Alpha ? J'aurais besoin des derniers indicateurs pour la r\xE9union de demain.\n\nMerci d'avance,\nMarie",
        senderId: "admin-1",
        recipientId: "emp-1",
        isRead: false,
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1e3)
      },
      {
        id: "msg-2",
        subject: "Re: Demande d'information - Projet Alpha",
        content: "Bonjour Marie,\n\nBien s\xFBr ! Le projet Alpha avance bien. Nous sommes \xE0 75% de completion. Je pr\xE9pare un rapport d\xE9taill\xE9 que je t'enverrai d'ici la fin de journ\xE9e.\n\nBonne journ\xE9e,\nSophie",
        senderId: "emp-1",
        recipientId: "admin-1",
        isRead: true,
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1e3)
      },
      {
        id: "msg-3",
        subject: "Formation cybers\xE9curit\xE9 - Rappel",
        content: "Bonjour \xE0 tous,\n\nJe vous rappelle que la formation cybers\xE9curit\xE9 est obligatoire et doit \xEAtre compl\xE9t\xE9e avant le 15 f\xE9vrier. Le lien d'acc\xE8s est disponible sur l'intranet.\n\nN'h\xE9sitez pas si vous avez des questions.\n\nPierre",
        senderId: "mod-1",
        recipientId: "emp-2",
        isRead: false,
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1e3)
      }
    ];
    testComplaints = [
      {
        id: "comp-1",
        submitterId: "emp-2",
        assignedToId: "admin-1",
        title: "Probl\xE8me de chauffage bureau 205",
        description: "Le radiateur du bureau 205 ne fonctionne pas correctement depuis une semaine. La temp\xE9rature est tr\xE8s basse, ce qui rend le travail difficile.",
        category: "infrastructure",
        priority: "medium",
        status: "open",
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1e3)
      },
      {
        id: "comp-2",
        submitterId: "emp-3",
        assignedToId: "mod-1",
        title: "Acc\xE8s parking - Badge d\xE9faillant",
        description: "Mon badge d'acc\xE8s au parking ne fonctionne plus depuis hier. Je dois attendre qu'un coll\xE8gue ouvre pour pouvoir entrer.",
        category: "access",
        priority: "low",
        status: "in_progress",
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 4 * 60 * 60 * 1e3)
      },
      {
        id: "comp-3",
        submitterId: "emp-4",
        assignedToId: "emp-1",
        title: "Probl\xE8me r\xE9seau wifi - D\xE9connexions fr\xE9quentes",
        description: "Le r\xE9seau wifi se d\xE9connecte r\xE9guli\xE8rement dans l'open space du 2\xE8me \xE9tage. Cela perturbe le travail et les visioconf\xE9rences.",
        category: "technical",
        priority: "high",
        status: "resolved",
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1e3)
      }
    ];
  }
});

// server/services/auth.ts
var auth_exports = {};
__export(auth_exports, {
  AuthService: () => AuthService
});
var import_bcrypt, SALT_ROUNDS, AuthService;
var init_auth = __esm({
  "server/services/auth.ts"() {
    "use strict";
    import_bcrypt = __toESM(require("bcrypt"), 1);
    SALT_ROUNDS = 12;
    AuthService = class {
      /**
       * Hash a password using bcrypt
       */
      static async hashPassword(password) {
        return import_bcrypt.default.hash(password, SALT_ROUNDS);
      }
      /**
       * Verify a password against a hash
       */
      static async verifyPassword(password, hash) {
        if (!hash || !hash.startsWith("$2")) {
          return password === hash;
        }
        return import_bcrypt.default.compare(password, hash);
      }
      /**
       * Validate password strength
       */
      static validatePasswordStrength(password) {
        const errors = [];
        if (password.length < 8) {
          errors.push("Le mot de passe doit contenir au moins 8 caract\xE8res");
        }
        if (!/[A-Z]/.test(password)) {
          errors.push("Le mot de passe doit contenir au moins une majuscule");
        }
        if (!/[a-z]/.test(password)) {
          errors.push("Le mot de passe doit contenir au moins une minuscule");
        }
        if (!/[0-9]/.test(password)) {
          errors.push("Le mot de passe doit contenir au moins un chiffre");
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
          errors.push("Le mot de passe doit contenir au moins un caract\xE8re sp\xE9cial");
        }
        return {
          isValid: errors.length === 0,
          errors
        };
      }
    };
  }
});

// server/index.ts
var import_express2 = __toESM(require("express"), 1);
var import_express_session = __toESM(require("express-session"), 1);

// server/routes/index.ts
var import_http = require("http");

// server/data/storage.ts
var import_crypto2 = require("crypto");

// server/data/storage-drizzle.ts
var import_crypto = require("crypto");
var import_drizzle_orm2 = require("drizzle-orm");

// server/db-mysql.ts
var import_promise = __toESM(require("mysql2/promise"), 1);
var import_mysql2 = require("drizzle-orm/mysql2");

// shared/schema-mysql.ts
var schema_mysql_exports = {};
__export(schema_mysql_exports, {
  announcements: () => announcements,
  complaints: () => complaints,
  documents: () => documents,
  events: () => events,
  forumCategories: () => forumCategories,
  forumLikes: () => forumLikes,
  forumPosts: () => forumPosts,
  forumTopics: () => forumTopics,
  insertAnnouncementSchema: () => insertAnnouncementSchema,
  insertComplaintSchema: () => insertComplaintSchema,
  insertDocumentSchema: () => insertDocumentSchema,
  insertEventSchema: () => insertEventSchema,
  insertMessageSchema: () => insertMessageSchema,
  insertTrainingSchema: () => insertTrainingSchema,
  insertUserSchema: () => insertUserSchema,
  messages: () => messages,
  permissions: () => permissions,
  trainingEnrollments: () => trainingEnrollments,
  trainings: () => trainings,
  userPermissions: () => userPermissions,
  users: () => users
});
var import_drizzle_orm = require("drizzle-orm");
var import_mysql_core = require("drizzle-orm/mysql-core");
var import_drizzle_zod = require("drizzle-zod");
var users = (0, import_mysql_core.mysqlTable)("users", {
  id: (0, import_mysql_core.varchar)("id", { length: 50 }).primaryKey(),
  username: (0, import_mysql_core.text)("username").notNull().unique(),
  password: (0, import_mysql_core.text)("password").notNull(),
  name: (0, import_mysql_core.text)("name").notNull(),
  role: (0, import_mysql_core.mysqlEnum)("role", ["employee", "admin", "moderator"]).default("employee"),
  avatar: (0, import_mysql_core.text)("avatar"),
  // Extended fields for employee management
  employeeId: (0, import_mysql_core.varchar)("employee_id", { length: 50 }).unique(),
  department: (0, import_mysql_core.varchar)("department", { length: 255 }),
  position: (0, import_mysql_core.varchar)("position", { length: 255 }),
  isActive: (0, import_mysql_core.boolean)("is_active").default(true),
  phone: (0, import_mysql_core.varchar)("phone", { length: 50 }),
  email: (0, import_mysql_core.varchar)("email", { length: 255 }),
  createdAt: (0, import_mysql_core.timestamp)("created_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`),
  updatedAt: (0, import_mysql_core.timestamp)("updated_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
});
var announcements = (0, import_mysql_core.mysqlTable)("announcements", {
  id: (0, import_mysql_core.varchar)("id", { length: 50 }).primaryKey(),
  title: (0, import_mysql_core.text)("title").notNull(),
  content: (0, import_mysql_core.text)("content").notNull(),
  type: (0, import_mysql_core.mysqlEnum)("type", ["info", "important", "event", "formation"]).default("info"),
  authorId: (0, import_mysql_core.varchar)("author_id", { length: 50 }),
  authorName: (0, import_mysql_core.text)("author_name").notNull(),
  imageUrl: (0, import_mysql_core.text)("image_url"),
  icon: (0, import_mysql_core.varchar)("icon", { length: 10 }).default("\u{1F4E2}"),
  createdAt: (0, import_mysql_core.timestamp)("created_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`).notNull(),
  isImportant: (0, import_mysql_core.boolean)("is_important").default(false)
});
var documents = (0, import_mysql_core.mysqlTable)("documents", {
  id: (0, import_mysql_core.varchar)("id", { length: 50 }).primaryKey(),
  title: (0, import_mysql_core.text)("title").notNull(),
  description: (0, import_mysql_core.text)("description"),
  category: (0, import_mysql_core.mysqlEnum)("category", ["regulation", "policy", "guide", "procedure"]).notNull(),
  fileName: (0, import_mysql_core.text)("file_name").notNull(),
  fileUrl: (0, import_mysql_core.text)("file_url").notNull(),
  updatedAt: (0, import_mysql_core.timestamp)("updated_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`).notNull(),
  version: (0, import_mysql_core.varchar)("version", { length: 20 }).default("1.0")
});
var events = (0, import_mysql_core.mysqlTable)("events", {
  id: (0, import_mysql_core.varchar)("id", { length: 50 }).primaryKey(),
  title: (0, import_mysql_core.text)("title").notNull(),
  description: (0, import_mysql_core.text)("description"),
  date: (0, import_mysql_core.timestamp)("date").notNull(),
  location: (0, import_mysql_core.text)("location"),
  type: (0, import_mysql_core.mysqlEnum)("type", ["meeting", "training", "social", "other"]).default("meeting"),
  organizerId: (0, import_mysql_core.varchar)("organizer_id", { length: 50 }),
  createdAt: (0, import_mysql_core.timestamp)("created_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`)
});
var messages = (0, import_mysql_core.mysqlTable)("messages", {
  id: (0, import_mysql_core.varchar)("id", { length: 50 }).primaryKey(),
  senderId: (0, import_mysql_core.varchar)("sender_id", { length: 50 }).notNull(),
  recipientId: (0, import_mysql_core.varchar)("recipient_id", { length: 50 }).notNull(),
  subject: (0, import_mysql_core.text)("subject").notNull(),
  content: (0, import_mysql_core.text)("content").notNull(),
  isRead: (0, import_mysql_core.boolean)("is_read").default(false),
  createdAt: (0, import_mysql_core.timestamp)("created_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`)
});
var complaints = (0, import_mysql_core.mysqlTable)("complaints", {
  id: (0, import_mysql_core.varchar)("id", { length: 50 }).primaryKey(),
  submitterId: (0, import_mysql_core.varchar)("submitter_id", { length: 50 }).notNull(),
  assignedToId: (0, import_mysql_core.varchar)("assigned_to_id", { length: 50 }),
  title: (0, import_mysql_core.text)("title").notNull(),
  description: (0, import_mysql_core.text)("description").notNull(),
  type: (0, import_mysql_core.mysqlEnum)("type", ["complaint", "suggestion", "technical", "hr", "other"]).default("complaint"),
  priority: (0, import_mysql_core.mysqlEnum)("priority", ["low", "medium", "high", "urgent"]).default("medium"),
  status: (0, import_mysql_core.mysqlEnum)("status", ["open", "in_progress", "resolved", "closed"]).default("open"),
  createdAt: (0, import_mysql_core.timestamp)("created_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`),
  updatedAt: (0, import_mysql_core.timestamp)("updated_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
});
var trainings = (0, import_mysql_core.mysqlTable)("trainings", {
  id: (0, import_mysql_core.varchar)("id", { length: 50 }).primaryKey(),
  title: (0, import_mysql_core.text)("title").notNull(),
  description: (0, import_mysql_core.text)("description"),
  category: (0, import_mysql_core.varchar)("category", { length: 100 }),
  difficulty: (0, import_mysql_core.mysqlEnum)("difficulty", ["beginner", "intermediate", "advanced"]).default("beginner"),
  duration: (0, import_mysql_core.int)("duration"),
  // minutes
  instructorId: (0, import_mysql_core.varchar)("instructor_id", { length: 50 }),
  isActive: (0, import_mysql_core.boolean)("is_active").default(true),
  createdAt: (0, import_mysql_core.timestamp)("created_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`),
  updatedAt: (0, import_mysql_core.timestamp)("updated_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
});
var trainingEnrollments = (0, import_mysql_core.mysqlTable)("training_enrollments", {
  id: (0, import_mysql_core.varchar)("id", { length: 50 }).primaryKey(),
  userId: (0, import_mysql_core.varchar)("user_id", { length: 50 }).notNull(),
  trainingId: (0, import_mysql_core.varchar)("training_id", { length: 50 }).notNull(),
  status: (0, import_mysql_core.mysqlEnum)("status", ["enrolled", "in_progress", "completed", "dropped"]).default("enrolled"),
  progress: (0, import_mysql_core.decimal)("progress", { precision: 5, scale: 2 }).default("0.00"),
  // 0-100%
  completedAt: (0, import_mysql_core.timestamp)("completed_at"),
  enrolledAt: (0, import_mysql_core.timestamp)("enrolled_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`)
});
var forumCategories = (0, import_mysql_core.mysqlTable)("forum_categories", {
  id: (0, import_mysql_core.varchar)("id", { length: 50 }).primaryKey(),
  name: (0, import_mysql_core.varchar)("name", { length: 255 }).notNull(),
  description: (0, import_mysql_core.text)("description"),
  color: (0, import_mysql_core.varchar)("color", { length: 7 }).default("#8B5CF6"),
  isActive: (0, import_mysql_core.boolean)("is_active").default(true),
  createdAt: (0, import_mysql_core.timestamp)("created_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`)
});
var forumTopics = (0, import_mysql_core.mysqlTable)("forum_topics", {
  id: (0, import_mysql_core.varchar)("id", { length: 50 }).primaryKey(),
  categoryId: (0, import_mysql_core.varchar)("category_id", { length: 50 }).notNull(),
  title: (0, import_mysql_core.varchar)("title", { length: 255 }).notNull(),
  content: (0, import_mysql_core.text)("content").notNull(),
  authorId: (0, import_mysql_core.varchar)("author_id", { length: 50 }).notNull(),
  isPinned: (0, import_mysql_core.boolean)("is_pinned").default(false),
  isLocked: (0, import_mysql_core.boolean)("is_locked").default(false),
  viewCount: (0, import_mysql_core.int)("view_count").default(0),
  replyCount: (0, import_mysql_core.int)("reply_count").default(0),
  lastReplyAt: (0, import_mysql_core.timestamp)("last_reply_at"),
  createdAt: (0, import_mysql_core.timestamp)("created_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`)
});
var forumPosts = (0, import_mysql_core.mysqlTable)("forum_posts", {
  id: (0, import_mysql_core.varchar)("id", { length: 50 }).primaryKey(),
  topicId: (0, import_mysql_core.varchar)("topic_id", { length: 50 }).notNull(),
  authorId: (0, import_mysql_core.varchar)("author_id", { length: 50 }).notNull(),
  content: (0, import_mysql_core.text)("content").notNull(),
  isEdited: (0, import_mysql_core.boolean)("is_edited").default(false),
  editedAt: (0, import_mysql_core.timestamp)("edited_at"),
  createdAt: (0, import_mysql_core.timestamp)("created_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`)
});
var forumLikes = (0, import_mysql_core.mysqlTable)("forum_likes", {
  id: (0, import_mysql_core.varchar)("id", { length: 50 }).primaryKey(),
  userId: (0, import_mysql_core.varchar)("user_id", { length: 50 }).notNull(),
  postId: (0, import_mysql_core.varchar)("post_id", { length: 50 }).notNull(),
  createdAt: (0, import_mysql_core.timestamp)("created_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`)
});
var permissions = (0, import_mysql_core.mysqlTable)("permissions", {
  id: (0, import_mysql_core.varchar)("id", { length: 50 }).primaryKey(),
  name: (0, import_mysql_core.varchar)("name", { length: 255 }).notNull().unique(),
  description: (0, import_mysql_core.text)("description"),
  module: (0, import_mysql_core.varchar)("module", { length: 100 }),
  // auth, content, messaging, training, admin
  action: (0, import_mysql_core.varchar)("action", { length: 100 }),
  // read, write, delete, manage
  createdAt: (0, import_mysql_core.timestamp)("created_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`)
});
var userPermissions = (0, import_mysql_core.mysqlTable)("user_permissions", {
  id: (0, import_mysql_core.varchar)("id", { length: 50 }).primaryKey(),
  userId: (0, import_mysql_core.varchar)("user_id", { length: 50 }).notNull(),
  permissionId: (0, import_mysql_core.varchar)("permission_id", { length: 50 }).notNull(),
  grantedAt: (0, import_mysql_core.timestamp)("granted_at").default(import_drizzle_orm.sql`CURRENT_TIMESTAMP`),
  grantedBy: (0, import_mysql_core.varchar)("granted_by", { length: 50 })
});
var insertUserSchema = (0, import_drizzle_zod.createInsertSchema)(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var insertAnnouncementSchema = (0, import_drizzle_zod.createInsertSchema)(announcements).omit({
  id: true,
  createdAt: true
});
var insertDocumentSchema = (0, import_drizzle_zod.createInsertSchema)(documents).omit({
  id: true,
  updatedAt: true
});
var insertEventSchema = (0, import_drizzle_zod.createInsertSchema)(events).omit({
  id: true,
  createdAt: true
});
var insertMessageSchema = (0, import_drizzle_zod.createInsertSchema)(messages).omit({
  id: true,
  createdAt: true
});
var insertComplaintSchema = (0, import_drizzle_zod.createInsertSchema)(complaints).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var insertTrainingSchema = (0, import_drizzle_zod.createInsertSchema)(trainings).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

// server/db-mysql.ts
var mysqlConfig = {
  host: process.env.MYSQL_HOST || "localhost",
  port: parseInt(process.env.MYSQL_PORT || "3306"),
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "intrasphere",
  ssl: process.env.MYSQL_SSL === "true" ? {
    rejectUnauthorized: false
  } : void 0,
  charset: "utf8mb4"
};
var mysqlConnection = import_promise.default.createPool(mysqlConfig);
var mysqlDb = (0, import_mysql2.drizzle)(mysqlConnection, {
  schema: schema_mysql_exports,
  mode: "default"
});
var db = mysqlDb;

// server/data/storage-drizzle.ts
var DrizzleStorage = class {
  // --- Utils internes ---
  ensureMySQL() {
    if (!process.env.MYSQL_HOST && !process.env.MYSQL_USER && !process.env.MYSQL_DATABASE) {
      throw new Error("DrizzleStorage: MySQL non configur\xE9 (variables MYSQL_* manquantes).");
    }
  }
  // --- Users ---
  async getUser(id) {
    this.ensureMySQL();
    const rows = await db.select().from(users).where((0, import_drizzle_orm2.eq)(users.id, id)).limit(1);
    return rows[0];
  }
  async getUserByUsername(username) {
    this.ensureMySQL();
    const rows = await db.select().from(users).where((0, import_drizzle_orm2.eq)(users.username, username)).limit(1);
    return rows[0];
  }
  async getUserByEmployeeId(employeeId) {
    this.ensureMySQL();
    const rows = await db.select().from(users).where((0, import_drizzle_orm2.eq)(users.employeeId, employeeId)).limit(1);
    return rows[0];
  }
  async createUser(user) {
    this.ensureMySQL();
    const id = (0, import_crypto.randomUUID)();
    await db.insert(users).values({
      id,
      username: user.username,
      password: user.password,
      name: user.name,
      role: user.role ?? "employee",
      avatar: user.avatar ?? null,
      employeeId: user.employeeId ?? null,
      department: user.department ?? null,
      position: user.position ?? null,
      isActive: user.isActive ?? true,
      phone: user.phone ?? null,
      email: user.email ?? null
    });
    const created = await this.getUser(id);
    if (!created) throw new Error("Failed to create user");
    return created;
  }
  async updateUser(id, updates) {
    this.ensureMySQL();
    await db.update(users).set({
      username: updates.username,
      password: updates.password,
      name: updates.name,
      role: updates.role,
      avatar: updates.avatar,
      employeeId: updates.employeeId,
      department: updates.department,
      position: updates.position,
      isActive: updates.isActive,
      phone: updates.phone,
      email: updates.email
    }).where((0, import_drizzle_orm2.eq)(users.id, id));
    const updated = await this.getUser(id);
    if (!updated) throw new Error("User not found after update");
    return updated;
  }
  async getUsers() {
    this.ensureMySQL();
    const rows = await db.select().from(users).where((0, import_drizzle_orm2.eq)(users.isActive, true));
    return rows;
  }
  // --- Announcements ---
  async getAnnouncements() {
    this.ensureMySQL();
    const rows = await db.select().from(announcements).orderBy((0, import_drizzle_orm2.desc)(announcements.createdAt));
    return rows;
  }
  async getAnnouncementById(id) {
    this.ensureMySQL();
    const rows = await db.select().from(announcements).where((0, import_drizzle_orm2.eq)(announcements.id, id)).limit(1);
    return rows[0];
  }
  async createAnnouncement(announcement) {
    this.ensureMySQL();
    const id = (0, import_crypto.randomUUID)();
    await db.insert(announcements).values({
      id,
      title: announcement.title,
      content: announcement.content,
      type: announcement.type ?? "info",
      authorId: announcement.authorId ?? null,
      authorName: announcement.authorName,
      imageUrl: announcement.imageUrl ?? null,
      icon: announcement.icon ?? "\u{1F4E2}",
      isImportant: announcement.isImportant ?? false
    });
    const created = await this.getAnnouncementById(id);
    if (!created) throw new Error("Failed to create announcement");
    return created;
  }
  async updateAnnouncement(id, updates) {
    this.ensureMySQL();
    await db.update(announcements).set({
      title: updates.title,
      content: updates.content,
      type: updates.type,
      authorId: updates.authorId,
      authorName: updates.authorName,
      imageUrl: updates.imageUrl,
      icon: updates.icon,
      isImportant: updates.isImportant
    }).where((0, import_drizzle_orm2.eq)(announcements.id, id));
    const updated = await this.getAnnouncementById(id);
    if (!updated) throw new Error("Announcement not found after update");
    return updated;
  }
  async deleteAnnouncement(id) {
    this.ensureMySQL();
    await db.delete(announcements).where((0, import_drizzle_orm2.eq)(announcements.id, id));
  }
  // --- Documents ---
  async getDocuments() {
    this.ensureMySQL();
    const rows = await db.select().from(documents).orderBy((0, import_drizzle_orm2.desc)(documents.updatedAt));
    return rows;
  }
  async getDocumentById(id) {
    this.ensureMySQL();
    const rows = await db.select().from(documents).where((0, import_drizzle_orm2.eq)(documents.id, id)).limit(1);
    return rows[0];
  }
  async createDocument(document) {
    this.ensureMySQL();
    const id = (0, import_crypto.randomUUID)();
    await db.insert(documents).values({
      id,
      title: document.title,
      description: document.description ?? null,
      category: document.category,
      fileName: document.fileName,
      fileUrl: document.fileUrl,
      version: document.version ?? "1.0"
    });
    const created = await this.getDocumentById(id);
    if (!created) throw new Error("Failed to create document");
    return created;
  }
  async updateDocument(id, updates) {
    this.ensureMySQL();
    await db.update(documents).set({
      title: updates.title,
      description: updates.description,
      category: updates.category,
      fileName: updates.fileName,
      fileUrl: updates.fileUrl,
      version: updates.version
    }).where((0, import_drizzle_orm2.eq)(documents.id, id));
    const updated = await this.getDocumentById(id);
    if (!updated) throw new Error("Document not found after update");
    return updated;
  }
  async deleteDocument(id) {
    this.ensureMySQL();
    await db.delete(documents).where((0, import_drizzle_orm2.eq)(documents.id, id));
  }
  // --- Events ---
  async getEvents() {
    this.ensureMySQL();
    const rows = await db.select().from(events).orderBy((0, import_drizzle_orm2.asc)(events.date));
    return rows;
  }
  async getEventById(id) {
    this.ensureMySQL();
    const rows = await db.select().from(events).where((0, import_drizzle_orm2.eq)(events.id, id)).limit(1);
    return rows[0];
  }
  async createEvent(event) {
    this.ensureMySQL();
    const id = (0, import_crypto.randomUUID)();
    await db.insert(events).values({
      id,
      title: event.title,
      description: event.description ?? null,
      date: event.date,
      location: event.location ?? null,
      type: event.type ?? "meeting",
      organizerId: event.organizerId ?? null
    });
    const created = await this.getEventById(id);
    if (!created) throw new Error("Failed to create event");
    return created;
  }
  async updateEvent(id, updates) {
    this.ensureMySQL();
    await db.update(events).set({
      title: updates.title,
      description: updates.description,
      date: updates.date,
      location: updates.location,
      type: updates.type,
      organizerId: updates.organizerId
    }).where((0, import_drizzle_orm2.eq)(events.id, id));
    const updated = await this.getEventById(id);
    if (!updated) throw new Error("Event not found after update");
    return updated;
  }
  async deleteEvent(id) {
    this.ensureMySQL();
    await db.delete(events).where((0, import_drizzle_orm2.eq)(events.id, id));
  }
  // --- Contents ---
  async getContents() {
    this.ensureMySQL();
    return [];
  }
  async getContentById(_id) {
    this.ensureMySQL();
    return void 0;
  }
  async createContent(_content) {
    this.ensureMySQL();
    throw new Error("Not implemented: createContent (MySQL schema minimal)");
  }
  async updateContent(_id, _content) {
    this.ensureMySQL();
    throw new Error("Not implemented: updateContent (MySQL schema minimal)");
  }
  async deleteContent(_id) {
    this.ensureMySQL();
    throw new Error("Not implemented: deleteContent (MySQL schema minimal)");
  }
  // --- Categories ---
  async getCategories() {
    this.ensureMySQL();
    return [];
  }
  async getCategoryById(_id) {
    this.ensureMySQL();
    return void 0;
  }
  async createCategory(_category) {
    this.ensureMySQL();
    throw new Error("Not implemented: createCategory (MySQL schema minimal)");
  }
  async updateCategory(_id, _category) {
    this.ensureMySQL();
    throw new Error("Not implemented: updateCategory (MySQL schema minimal)");
  }
  async deleteCategory(_id) {
    this.ensureMySQL();
    throw new Error("Not implemented: deleteCategory (MySQL schema minimal)");
  }
  // --- Stats ---
  async getStats() {
    this.ensureMySQL();
    const [usersCount] = await db.select({ count: import_drizzle_orm2.sql`COUNT(*)` }).from(users);
    const [annCount] = await db.select({ count: import_drizzle_orm2.sql`COUNT(*)` }).from(announcements);
    const [docCount] = await db.select({ count: import_drizzle_orm2.sql`COUNT(*)` }).from(documents);
    const [evtCount] = await db.select({ count: import_drizzle_orm2.sql`COUNT(*)` }).from(events);
    return {
      totalUsers: Number(usersCount?.count || 0),
      totalAnnouncements: Number(annCount?.count || 0),
      totalDocuments: Number(docCount?.count || 0),
      totalEvents: Number(evtCount?.count || 0),
      totalMessages: 0,
      totalComplaints: 0,
      newAnnouncements: 0,
      updatedDocuments: 0,
      connectedUsers: 0,
      pendingComplaints: 0
    };
  }
  // --- Non implémenté (placeholder) ---
  async getMessages(_userId) {
    throw new Error("Not implemented");
  }
  async getMessageById(_id) {
    throw new Error("Not implemented");
  }
  async createMessage(_message) {
    throw new Error("Not implemented");
  }
  async markMessageAsRead(_id) {
    throw new Error("Not implemented");
  }
  async deleteMessage(_id) {
    throw new Error("Not implemented");
  }
  async getComplaints() {
    throw new Error("Not implemented");
  }
  async getComplaintById(_id) {
    throw new Error("Not implemented");
  }
  async getComplaintsByUser(_userId) {
    throw new Error("Not implemented");
  }
  async createComplaint(_complaint) {
    throw new Error("Not implemented");
  }
  async updateComplaint(_id, _complaint) {
    throw new Error("Not implemented");
  }
  async deleteComplaint(_id) {
    throw new Error("Not implemented");
  }
  async getPermissions(_userId) {
    throw new Error("Not implemented");
  }
  async createPermission(_permission) {
    throw new Error("Not implemented");
  }
  async revokePermission(_id) {
    throw new Error("Not implemented");
  }
  async hasPermission(_userId, _permission) {
    throw new Error("Not implemented");
  }
  async getEmployeeCategories() {
    throw new Error("Not implemented");
  }
  async getEmployeeCategoryById(_id) {
    throw new Error("Not implemented");
  }
  async createEmployeeCategory(_category) {
    throw new Error("Not implemented");
  }
  async updateEmployeeCategory(_id, _category) {
    throw new Error("Not implemented");
  }
  async deleteEmployeeCategory(_id) {
    throw new Error("Not implemented");
  }
  async getSystemSettings() {
    throw new Error("Not implemented");
  }
  async updateSystemSettings(_settings) {
    throw new Error("Not implemented");
  }
  async getTrainings() {
    throw new Error("Not implemented");
  }
  async getTrainingById(_id) {
    throw new Error("Not implemented");
  }
  async createTraining(_training) {
    throw new Error("Not implemented");
  }
  async updateTraining(_id, _training) {
    throw new Error("Not implemented");
  }
  async deleteTraining(_id) {
    throw new Error("Not implemented");
  }
};

// server/data/storage.ts
var MemStorage = class {
  users;
  announcements;
  documents;
  events;
  messages;
  complaints;
  permissions;
  contents;
  categories;
  employeeCategories;
  systemSettings;
  // Training storage
  trainings;
  trainingParticipants;
  // E-learning storage
  courses;
  lessons;
  quizzes;
  enrollments;
  lessonProgress;
  quizAttempts;
  certificates;
  resources;
  // Forum system storage
  forumCategories;
  forumTopics;
  forumPosts;
  forumLikes;
  forumUserStats;
  // Configuration storage
  viewsConfig = /* @__PURE__ */ new Map();
  userSettings = /* @__PURE__ */ new Map();
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.announcements = /* @__PURE__ */ new Map();
    this.documents = /* @__PURE__ */ new Map();
    this.events = /* @__PURE__ */ new Map();
    this.messages = /* @__PURE__ */ new Map();
    this.complaints = /* @__PURE__ */ new Map();
    this.permissions = /* @__PURE__ */ new Map();
    this.contents = /* @__PURE__ */ new Map();
    this.categories = /* @__PURE__ */ new Map();
    this.employeeCategories = /* @__PURE__ */ new Map();
    this.systemSettings = {
      id: "settings",
      showAnnouncements: true,
      showContent: true,
      showDocuments: true,
      showForum: true,
      showMessages: true,
      showComplaints: true,
      showTraining: true,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.trainings = /* @__PURE__ */ new Map();
    this.trainingParticipants = /* @__PURE__ */ new Map();
    this.courses = /* @__PURE__ */ new Map();
    this.lessons = /* @__PURE__ */ new Map();
    this.quizzes = /* @__PURE__ */ new Map();
    this.enrollments = /* @__PURE__ */ new Map();
    this.lessonProgress = /* @__PURE__ */ new Map();
    this.quizAttempts = /* @__PURE__ */ new Map();
    this.certificates = /* @__PURE__ */ new Map();
    this.resources = /* @__PURE__ */ new Map();
    this.forumCategories = /* @__PURE__ */ new Map();
    this.forumTopics = /* @__PURE__ */ new Map();
    this.forumPosts = /* @__PURE__ */ new Map();
    this.forumLikes = /* @__PURE__ */ new Map();
    this.forumUserStats = /* @__PURE__ */ new Map();
    this.viewsConfig = /* @__PURE__ */ new Map();
    this.userSettings = /* @__PURE__ */ new Map();
    this.initializeData();
  }
  initializeData() {
    const defaultUsers = [
      {
        id: "user-1",
        username: "admin",
        password: "admin123!",
        name: "Jean Dupont",
        role: "admin",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
        employeeId: "EMP001",
        department: "Direction",
        position: "Directeur G\xE9n\xE9ral",
        isActive: true,
        phone: "01 23 45 67 89",
        email: "jean.dupont@intrasphere.com",
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        id: "user-2",
        username: "marie.martin",
        password: "password123",
        name: "Marie Martin",
        role: "moderator",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        employeeId: "EMP002",
        department: "Ressources Humaines",
        position: "Responsable RH",
        isActive: true,
        phone: "01 23 45 67 90",
        email: "marie.martin@intrasphere.com",
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        id: "user-3",
        username: "pierre.dubois",
        password: "password123",
        name: "Pierre Dubois",
        role: "employee",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        employeeId: "EMP003",
        department: "Informatique",
        position: "D\xE9veloppeur",
        isActive: true,
        phone: "01 23 45 67 91",
        email: "pierre.dubois@intrasphere.com",
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }
    ];
    const sampleAnnouncements = [
      {
        id: "ann-1",
        title: "Nouvelle politique de t\xE9l\xE9travail",
        content: "\xC0 partir du 1er d\xE9cembre, une nouvelle politique de t\xE9l\xE9travail hybride sera mise en place.",
        type: "important",
        authorId: "user-1",
        authorName: "Jean Dupont",
        imageUrl: null,
        icon: "\u{1F4E2}",
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1e3),
        isImportant: true
      },
      {
        id: "ann-2",
        title: "Soir\xE9e d'entreprise - 15 d\xE9cembre",
        content: "Nous organisons notre soir\xE9e de fin d'ann\xE9e le vendredi 15 d\xE9cembre.",
        type: "event",
        authorId: "user-2",
        authorName: "Marie Martin",
        imageUrl: null,
        icon: "\u{1F389}",
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1e3),
        isImportant: false
      }
    ];
    const sampleDocuments = [
      {
        id: "doc-1",
        title: "R\xE8glement int\xE9rieur 2024",
        description: "Version mise \xE0 jour du r\xE8glement int\xE9rieur",
        category: "regulation",
        fileName: "reglement-interieur-2024.pdf",
        fileUrl: "/documents/reglement-interieur-2024.pdf",
        updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3),
        version: "2024.1"
      }
    ];
    const sampleEvents = [
      {
        id: "event-1",
        title: "R\xE9union \xE9quipe marketing",
        description: "Point mensuel sur les campagnes",
        date: new Date(2024, 0, 16, 14, 0),
        location: "Salle de conf\xE9rence A",
        type: "meeting",
        createdAt: /* @__PURE__ */ new Date(),
        organizerId: "user-1"
      }
    ];
    const sampleMessages = [
      {
        id: "msg-1",
        senderId: "user-2",
        recipientId: "user-1",
        subject: "Nouvelle politique RH",
        content: "Bonjour Jean, j'aimerais discuter avec vous de la nouvelle politique de t\xE9l\xE9travail. Pouvez-vous me dire quand vous \xEAtes disponible cette semaine ?",
        isRead: false,
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1e3)
      },
      {
        id: "msg-2",
        senderId: "user-3",
        recipientId: "user-1",
        subject: "Probl\xE8me technique",
        content: "Salut, j'ai un souci avec mon ordinateur qui ne d\xE9marre plus. Est-ce que tu peux m'aider ou me dire \xE0 qui m'adresser ?",
        isRead: true,
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3)
      }
    ];
    const sampleComplaints = [
      {
        id: "complaint-1",
        submitterId: "user-3",
        assignedToId: "user-2",
        title: "Climatisation d\xE9faillante",
        description: "La climatisation ne fonctionne pas correctement dans mon bureau. Il fait tr\xE8s chaud et cela impacte ma productivit\xE9.",
        category: "facilities",
        priority: "medium",
        status: "open",
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1e3)
      }
    ];
    const sampleCategories = [
      {
        id: "cat-1",
        name: "Formation",
        color: "#3B82F6",
        icon: "\u{1F393}",
        description: "Contenus de formation et d\xE9veloppement des comp\xE9tences",
        isVisible: true,
        sortOrder: 1,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "cat-2",
        name: "Actualit\xE9s",
        color: "#10B981",
        icon: "\u{1F4F0}",
        description: "Actualit\xE9s et informations de l'entreprise",
        isVisible: true,
        sortOrder: 2,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "cat-3",
        name: "Corporate",
        color: "#8B5CF6",
        icon: "\u{1F3E2}",
        description: "Documents et communications corporate",
        isVisible: true,
        sortOrder: 3,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "cat-4",
        name: "Social",
        color: "#F59E0B",
        icon: "\u{1F389}",
        description: "\xC9v\xE9nements sociaux et team building",
        isVisible: true,
        sortOrder: 4,
        createdAt: /* @__PURE__ */ new Date()
      }
    ];
    const sampleContent = [
      {
        id: "content-1",
        title: "Guide d'int\xE9gration nouveaux employ\xE9s",
        type: "video",
        category: "Formation",
        description: "Vid\xE9o d'accueil compl\xE8te pour faciliter l'int\xE9gration des nouveaux collaborateurs dans l'entreprise.",
        thumbnailUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
        fileUrl: "/content/integration-guide.mp4",
        duration: "12 min",
        viewCount: 245,
        rating: 4,
        isPopular: true,
        isFeatured: true,
        tags: ["formation", "int\xE9gration", "nouveaux employ\xE9s"],
        createdAt: /* @__PURE__ */ new Date("2024-01-15T10:00:00Z"),
        updatedAt: /* @__PURE__ */ new Date("2024-01-15T10:00:00Z")
      },
      {
        id: "content-2",
        title: "Pr\xE9sentation des nouveaux bureaux",
        type: "image",
        category: "Actualit\xE9s",
        description: "Galerie photos compl\xE8te des nouveaux espaces de travail am\xE9nag\xE9s avec les derni\xE8res technologies.",
        thumbnailUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
        fileUrl: "/content/bureaux-galerie.jpg",
        duration: null,
        viewCount: 156,
        rating: 4,
        isPopular: false,
        isFeatured: false,
        tags: ["bureaux", "am\xE9nagement", "photos"],
        createdAt: /* @__PURE__ */ new Date("2024-01-10T14:30:00Z"),
        updatedAt: /* @__PURE__ */ new Date("2024-01-10T14:30:00Z")
      }
    ];
    const sampleForumCategories = [
      {
        id: "forum-cat-1",
        name: "Discussion G\xE9n\xE9rale",
        description: "Discussions g\xE9n\xE9rales sur l'entreprise et le travail",
        color: "#3B82F6",
        icon: "\u{1F4AC}",
        sortOrder: 1,
        isActive: true,
        isModerated: false,
        accessLevel: "all",
        moderatorIds: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "forum-cat-2",
        name: "Annonces Officielles",
        description: "Communications importantes de la direction",
        color: "#EF4444",
        icon: "\u{1F4E2}",
        sortOrder: 2,
        isActive: true,
        isModerated: true,
        accessLevel: "all",
        moderatorIds: '["user-1", "user-2"]',
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "forum-cat-3",
        name: "Entraide & Support",
        description: "Questions techniques et demandes d'aide",
        color: "#10B981",
        icon: "\u{1F91D}",
        sortOrder: 3,
        isActive: true,
        isModerated: false,
        accessLevel: "employee",
        moderatorIds: null,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "forum-cat-4",
        name: "\xC9v\xE9nements & Social",
        description: "Organisation d'\xE9v\xE9nements et discussions sociales",
        color: "#F59E0B",
        icon: "\u{1F389}",
        sortOrder: 4,
        isActive: true,
        isModerated: false,
        accessLevel: "all",
        moderatorIds: null,
        createdAt: /* @__PURE__ */ new Date()
      }
    ];
    const sampleForumTopics = [
      {
        id: "forum-topic-1",
        categoryId: "forum-cat-1",
        title: "Bienvenue sur le nouveau forum IntraSphere !",
        description: "Pr\xE9sentation du nouveau syst\xE8me de forum int\xE9gr\xE9",
        authorId: "user-1",
        authorName: "Jean Dupont",
        isPinned: true,
        isLocked: false,
        isAnnouncement: true,
        viewCount: 125,
        replyCount: 8,
        lastReplyAt: new Date(Date.now() - 2 * 60 * 60 * 1e3),
        lastReplyBy: "user-3",
        lastReplyByName: "Pierre Dubois",
        tags: '["bienvenue", "forum", "nouveau"]',
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1e3)
      },
      {
        id: "forum-topic-2",
        categoryId: "forum-cat-3",
        title: "Probl\xE8me avec l'imprimante du 2e \xE9tage",
        description: "L'imprimante ne r\xE9pond plus depuis ce matin",
        authorId: "user-3",
        authorName: "Pierre Dubois",
        isPinned: false,
        isLocked: false,
        isAnnouncement: false,
        viewCount: 42,
        replyCount: 3,
        lastReplyAt: new Date(Date.now() - 30 * 60 * 1e3),
        lastReplyBy: "user-2",
        lastReplyByName: "Marie Martin",
        tags: '["technique", "imprimante", "probl\xE8me"]',
        createdAt: new Date(Date.now() - 8 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 30 * 60 * 1e3)
      },
      {
        id: "forum-topic-3",
        categoryId: "forum-cat-4",
        title: "Organisation pot de d\xE9part Julie",
        description: "Julie quitte l'\xE9quipe vendredi, organisons-lui un petit pot !",
        authorId: "user-2",
        authorName: "Marie Martin",
        isPinned: false,
        isLocked: false,
        isAnnouncement: false,
        viewCount: 67,
        replyCount: 12,
        lastReplyAt: new Date(Date.now() - 15 * 60 * 1e3),
        lastReplyBy: "user-1",
        lastReplyByName: "Jean Dupont",
        tags: '["social", "d\xE9part", "organisation"]',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 15 * 60 * 1e3)
      }
    ];
    const sampleForumPosts = [
      {
        id: "forum-post-1",
        categoryId: "forum-cat-1",
        topicId: "forum-topic-1",
        authorId: "user-1",
        authorName: "Jean Dupont",
        content: "Bonjour \xE0 tous ! Je suis ravi de vous pr\xE9senter notre nouveau syst\xE8me de forum int\xE9gr\xE9 \xE0 IntraSphere. Cette nouvelle fonctionnalit\xE9 va nous permettre d'\xE9changer plus facilement et de cr\xE9er une vraie communaut\xE9 au sein de l'entreprise. N'h\xE9sitez pas \xE0 poser vos questions et \xE0 partager vos id\xE9es !",
        isFirstPost: true,
        parentPostId: null,
        likeCount: 5,
        isEdited: false,
        editedAt: null,
        editedBy: null,
        isDeleted: false,
        deletedAt: null,
        deletedBy: null,
        attachments: null,
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1e3)
      },
      {
        id: "forum-post-2",
        categoryId: "forum-cat-1",
        topicId: "forum-topic-1",
        authorId: "user-2",
        authorName: "Marie Martin",
        content: "Excellente initiative ! Le forum va vraiment am\xE9liorer notre communication interne. J'ai h\xE2te de voir toutes les discussions qui vont na\xEEtre ici.",
        isFirstPost: false,
        parentPostId: null,
        likeCount: 3,
        isEdited: false,
        editedAt: null,
        editedBy: null,
        isDeleted: false,
        deletedAt: null,
        deletedBy: null,
        attachments: null,
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1e3)
      },
      {
        id: "forum-post-3",
        categoryId: "forum-cat-3",
        topicId: "forum-topic-2",
        authorId: "user-3",
        authorName: "Pierre Dubois",
        content: "Bonjour, j'ai un probl\xE8me avec l'imprimante du 2e \xE9tage. Elle ne r\xE9pond plus depuis ce matin et j'ai plusieurs documents urgents \xE0 imprimer. Est-ce que quelqu'un sait ce qui se passe ?",
        isFirstPost: true,
        parentPostId: null,
        likeCount: 1,
        isEdited: false,
        editedAt: null,
        editedBy: null,
        isDeleted: false,
        deletedAt: null,
        deletedBy: null,
        attachments: null,
        createdAt: new Date(Date.now() - 8 * 60 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 8 * 60 * 60 * 1e3)
      },
      {
        id: "forum-post-4",
        categoryId: "forum-cat-3",
        topicId: "forum-topic-2",
        authorId: "user-2",
        authorName: "Marie Martin",
        content: "Salut Pierre, j'ai contact\xE9 le service technique. Ils vont passer dans la matin\xE9e pour r\xE9parer l'imprimante. En attendant, tu peux utiliser celle du 1er \xE9tage si c'est urgent !",
        isFirstPost: false,
        parentPostId: null,
        likeCount: 2,
        isEdited: false,
        editedAt: null,
        editedBy: null,
        isDeleted: false,
        deletedAt: null,
        deletedBy: null,
        attachments: null,
        createdAt: new Date(Date.now() - 30 * 60 * 1e3),
        updatedAt: new Date(Date.now() - 30 * 60 * 1e3)
      }
    ];
    const sampleForumUserStats = [
      {
        id: "forum-stats-1",
        userId: "user-1",
        postCount: 2,
        topicCount: 1,
        likeCount: 5,
        reputationScore: 25,
        badges: '["admin", "pioneer"]',
        joinedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3),
        lastActiveAt: new Date(Date.now() - 60 * 1e3)
      },
      {
        id: "forum-stats-2",
        userId: "user-2",
        postCount: 2,
        topicCount: 1,
        likeCount: 3,
        reputationScore: 18,
        badges: '["moderator", "helper"]',
        joinedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1e3),
        lastActiveAt: new Date(Date.now() - 30 * 60 * 1e3)
      },
      {
        id: "forum-stats-3",
        userId: "user-3",
        postCount: 1,
        topicCount: 1,
        likeCount: 1,
        reputationScore: 5,
        badges: '["newbie"]',
        joinedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1e3),
        lastActiveAt: new Date(Date.now() - 8 * 60 * 60 * 1e3)
      }
    ];
    defaultUsers.forEach((user) => this.users.set(user.id, user));
    sampleAnnouncements.forEach((ann) => this.announcements.set(ann.id, ann));
    sampleDocuments.forEach((doc) => this.documents.set(doc.id, doc));
    sampleEvents.forEach((event) => this.events.set(event.id, event));
    sampleMessages.forEach((msg) => this.messages.set(msg.id, msg));
    sampleComplaints.forEach((complaint) => this.complaints.set(complaint.id, complaint));
    sampleCategories.forEach((cat) => this.categories.set(cat.id, cat));
    sampleContent.forEach((content) => this.contents.set(content.id, content));
    const sampleEmployeeCategories = [
      {
        id: "emp-cat-1",
        name: "D\xE9veloppeurs",
        description: "\xC9quipe de d\xE9veloppement logiciel",
        color: "#3B82F6",
        permissions: ["validate_posts"],
        isActive: true,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "emp-cat-2",
        name: "Managers",
        description: "Personnel d'encadrement",
        color: "#8B5CF6",
        permissions: ["validate_topics", "validate_posts", "manage_employee_categories"],
        isActive: true,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "emp-cat-3",
        name: "RH",
        description: "Ressources humaines",
        color: "#10B981",
        permissions: ["validate_topics", "validate_posts"],
        isActive: true,
        createdAt: /* @__PURE__ */ new Date()
      }
    ];
    sampleEmployeeCategories.forEach((cat) => this.employeeCategories.set(cat.id, cat));
    sampleForumCategories.forEach((cat) => this.forumCategories.set(cat.id, cat));
    sampleForumTopics.forEach((topic) => this.forumTopics.set(topic.id, topic));
    sampleForumPosts.forEach((post) => this.forumPosts.set(post.id, post));
    sampleForumUserStats.forEach((stats) => this.forumUserStats.set(stats.id, stats));
  }
  // Users
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find((user) => user.username === username);
  }
  async getUserByEmployeeId(employeeId) {
    return Array.from(this.users.values()).find((user) => user.employeeId === employeeId);
  }
  async getUsers() {
    return Array.from(this.users.values()).filter((user) => user.isActive);
  }
  async createUser(insertUser) {
    const id = (0, import_crypto2.randomUUID)();
    const user = {
      ...insertUser,
      id,
      role: insertUser.role || "employee",
      avatar: insertUser.avatar || null,
      employeeId: insertUser.employeeId || null,
      department: insertUser.department || null,
      position: insertUser.position || null,
      phone: insertUser.phone || null,
      email: insertUser.email || null,
      isActive: true,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.users.set(id, user);
    return user;
  }
  async updateUser(id, updates) {
    const user = this.users.get(id);
    if (!user) throw new Error("User not found");
    const updatedUser = { ...user, ...updates, updatedAt: /* @__PURE__ */ new Date() };
    this.users.set(id, updatedUser);
    return updatedUser;
  }
  // Announcements
  async getAnnouncements() {
    return Array.from(this.announcements.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
  async getAnnouncementById(id) {
    return this.announcements.get(id);
  }
  async createAnnouncement(insertAnnouncement) {
    const id = (0, import_crypto2.randomUUID)();
    const announcement = {
      ...insertAnnouncement,
      id,
      type: insertAnnouncement.type || "info",
      authorId: "user-1",
      // Fixed authorId since it's not in the insert schema
      imageUrl: insertAnnouncement.imageUrl || null,
      icon: insertAnnouncement.icon || null,
      createdAt: /* @__PURE__ */ new Date(),
      isImportant: insertAnnouncement.isImportant || false
    };
    this.announcements.set(id, announcement);
    return announcement;
  }
  async updateAnnouncement(id, updates) {
    const announcement = this.announcements.get(id);
    if (!announcement) throw new Error("Announcement not found");
    const updatedAnnouncement = { ...announcement, ...updates };
    this.announcements.set(id, updatedAnnouncement);
    return updatedAnnouncement;
  }
  async deleteAnnouncement(id) {
    this.announcements.delete(id);
  }
  // Documents
  async getDocuments() {
    return Array.from(this.documents.values()).sort(
      (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()
    );
  }
  async getDocumentById(id) {
    return this.documents.get(id);
  }
  async createDocument(insertDocument) {
    const id = (0, import_crypto2.randomUUID)();
    const document = {
      ...insertDocument,
      id,
      description: insertDocument.description || null,
      version: insertDocument.version || "1.0",
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.documents.set(id, document);
    return document;
  }
  async updateDocument(id, updates) {
    const document = this.documents.get(id);
    if (!document) throw new Error("Document not found");
    const updatedDocument = { ...document, ...updates, updatedAt: /* @__PURE__ */ new Date() };
    this.documents.set(id, updatedDocument);
    return updatedDocument;
  }
  async deleteDocument(id) {
    this.documents.delete(id);
  }
  // Events
  async getEvents() {
    return Array.from(this.events.values()).sort(
      (a, b) => a.date.getTime() - b.date.getTime()
    );
  }
  async getEventById(id) {
    return this.events.get(id);
  }
  async createEvent(insertEvent) {
    const id = (0, import_crypto2.randomUUID)();
    const event = {
      ...insertEvent,
      id,
      type: insertEvent.type || "meeting",
      description: insertEvent.description || null,
      location: insertEvent.location || null,
      organizerId: insertEvent.organizerId || null,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.events.set(id, event);
    return event;
  }
  async updateEvent(id, updates) {
    const event = this.events.get(id);
    if (!event) throw new Error("Event not found");
    const updatedEvent = { ...event, ...updates };
    this.events.set(id, updatedEvent);
    return updatedEvent;
  }
  async deleteEvent(id) {
    this.events.delete(id);
  }
  // Messages
  async getMessages(userId) {
    return Array.from(this.messages.values()).filter((message) => message.senderId === userId || message.recipientId === userId).sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }
  async getMessageById(id) {
    return this.messages.get(id);
  }
  async createMessage(insertMessage) {
    const id = (0, import_crypto2.randomUUID)();
    const message = {
      ...insertMessage,
      id,
      isRead: false,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.messages.set(id, message);
    return message;
  }
  async markMessageAsRead(id) {
    const message = this.messages.get(id);
    if (message) {
      message.isRead = true;
      this.messages.set(id, message);
    }
  }
  async deleteMessage(id) {
    this.messages.delete(id);
  }
  // Complaints
  async getComplaints() {
    return Array.from(this.complaints.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
  async getComplaintById(id) {
    return this.complaints.get(id);
  }
  async getComplaintsByUser(userId) {
    return Array.from(this.complaints.values()).filter((complaint) => complaint.submitterId === userId).sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }
  async createComplaint(insertComplaint) {
    const id = (0, import_crypto2.randomUUID)();
    const complaint = {
      ...insertComplaint,
      id,
      assignedToId: insertComplaint.assignedToId || null,
      priority: insertComplaint.priority || "medium",
      status: "open",
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.complaints.set(id, complaint);
    return complaint;
  }
  async updateComplaint(id, updates) {
    const complaint = this.complaints.get(id);
    if (!complaint) throw new Error("Complaint not found");
    const updatedComplaint = { ...complaint, ...updates, updatedAt: /* @__PURE__ */ new Date() };
    this.complaints.set(id, updatedComplaint);
    return updatedComplaint;
  }
  async deleteComplaint(id) {
    this.complaints.delete(id);
  }
  // Permissions
  async getPermissions(userId) {
    return Array.from(this.permissions.values()).filter((permission) => permission.userId === userId);
  }
  async createPermission(insertPermission) {
    const id = (0, import_crypto2.randomUUID)();
    const permission = {
      ...insertPermission,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.permissions.set(id, permission);
    return permission;
  }
  async revokePermission(id) {
    this.permissions.delete(id);
  }
  async hasPermission(userId, permissionType) {
    const user = await this.getUser(userId);
    if (!user) return false;
    if (user.role === "admin") return true;
    const userPermissions2 = await this.getPermissions(userId);
    return userPermissions2.some((p) => p.permission === permissionType);
  }
  // Contents
  async getContents() {
    return Array.from(this.contents.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
  async getContentById(id) {
    return this.contents.get(id);
  }
  async createContent(insertContent) {
    const id = (0, import_crypto2.randomUUID)();
    const content = {
      ...insertContent,
      id,
      description: insertContent.description || null,
      thumbnailUrl: insertContent.thumbnailUrl || null,
      duration: insertContent.duration || null,
      viewCount: 0,
      rating: 0,
      isPopular: insertContent.isPopular || false,
      isFeatured: insertContent.isFeatured || false,
      tags: insertContent.tags || [],
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.contents.set(id, content);
    return content;
  }
  async updateContent(id, updates) {
    const content = this.contents.get(id);
    if (!content) throw new Error("Content not found");
    const updatedContent = { ...content, ...updates, updatedAt: /* @__PURE__ */ new Date() };
    this.contents.set(id, updatedContent);
    return updatedContent;
  }
  async deleteContent(id) {
    this.contents.delete(id);
  }
  // Categories
  async getCategories() {
    return Array.from(this.categories.values()).sort(
      (a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)
    );
  }
  async getCategoryById(id) {
    return this.categories.get(id);
  }
  async createCategory(insertCategory) {
    const id = (0, import_crypto2.randomUUID)();
    const category = {
      ...insertCategory,
      id,
      icon: insertCategory.icon || null,
      color: insertCategory.color || null,
      description: insertCategory.description || null,
      isVisible: insertCategory.isVisible ?? true,
      sortOrder: insertCategory.sortOrder || 0,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.categories.set(id, category);
    return category;
  }
  async updateCategory(id, updates) {
    const category = this.categories.get(id);
    if (!category) throw new Error("Category not found");
    const updatedCategory = { ...category, ...updates };
    this.categories.set(id, updatedCategory);
    return updatedCategory;
  }
  async deleteCategory(id) {
    this.categories.delete(id);
  }
  // Employee Categories implementation
  async getEmployeeCategories() {
    return Array.from(this.employeeCategories.values()).sort(
      (a, b) => a.name.localeCompare(b.name)
    );
  }
  async getEmployeeCategoryById(id) {
    return this.employeeCategories.get(id);
  }
  async createEmployeeCategory(insertCategory) {
    const id = (0, import_crypto2.randomUUID)();
    const category = {
      ...insertCategory,
      id,
      description: insertCategory.description || null,
      color: insertCategory.color || "#10B981",
      permissions: insertCategory.permissions || [],
      isActive: insertCategory.isActive ?? true,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.employeeCategories.set(id, category);
    return category;
  }
  async updateEmployeeCategory(id, updates) {
    const category = this.employeeCategories.get(id);
    if (!category) throw new Error("Employee category not found");
    const updatedCategory = { ...category, ...updates };
    this.employeeCategories.set(id, updatedCategory);
    return updatedCategory;
  }
  async deleteEmployeeCategory(id) {
    this.employeeCategories.delete(id);
  }
  // System Settings implementation
  async getSystemSettings() {
    return this.systemSettings;
  }
  async updateSystemSettings(settings) {
    this.systemSettings = {
      ...this.systemSettings,
      ...settings,
      updatedAt: /* @__PURE__ */ new Date()
    };
    return this.systemSettings;
  }
  // Trainings
  async getTrainings() {
    return Array.from(this.trainings.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
  async getTrainingById(id) {
    return this.trainings.get(id);
  }
  async createTraining(insertTraining) {
    const id = (0, import_crypto2.randomUUID)();
    const training = {
      ...insertTraining,
      id,
      instructorId: null,
      startDate: insertTraining.startDate || null,
      endDate: insertTraining.endDate || null,
      location: insertTraining.location || null,
      maxParticipants: insertTraining.maxParticipants || null,
      currentParticipants: 0,
      isActive: insertTraining.isActive !== void 0 ? insertTraining.isActive : true,
      isVisible: insertTraining.isVisible !== void 0 ? insertTraining.isVisible : true,
      isMandatory: insertTraining.isMandatory !== void 0 ? insertTraining.isMandatory : false,
      difficulty: insertTraining.difficulty || null,
      description: insertTraining.description || null,
      thumbnailUrl: insertTraining.thumbnailUrl || null,
      documentUrls: insertTraining.documentUrls || [],
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.trainings.set(id, training);
    return training;
  }
  async updateTraining(id, updates) {
    const training = this.trainings.get(id);
    if (!training) throw new Error("Training not found");
    const updatedTraining = { ...training, ...updates, updatedAt: /* @__PURE__ */ new Date() };
    this.trainings.set(id, updatedTraining);
    return updatedTraining;
  }
  async deleteTraining(id) {
    const participants = Array.from(this.trainingParticipants.values()).filter((p) => p.trainingId === id);
    participants.forEach((p) => this.trainingParticipants.delete(p.id));
    this.trainings.delete(id);
  }
  // Training Participants
  async getTrainingParticipants(trainingId) {
    return Array.from(this.trainingParticipants.values()).filter((p) => p.trainingId === trainingId).sort((a, b) => (b.registeredAt?.getTime() || 0) - (a.registeredAt?.getTime() || 0));
  }
  async getUserTrainingParticipations(userId) {
    return Array.from(this.trainingParticipants.values()).filter((p) => p.userId === userId).sort((a, b) => (b.registeredAt?.getTime() || 0) - (a.registeredAt?.getTime() || 0));
  }
  async addTrainingParticipant(insertParticipant) {
    const id = (0, import_crypto2.randomUUID)();
    const participant = {
      ...insertParticipant,
      id,
      registeredAt: /* @__PURE__ */ new Date(),
      status: insertParticipant.status || "registered",
      completionDate: insertParticipant.completionDate || null,
      score: insertParticipant.score || null,
      feedback: insertParticipant.feedback || null
    };
    this.trainingParticipants.set(id, participant);
    const training = this.trainings.get(insertParticipant.trainingId);
    if (training) {
      training.currentParticipants = (training.currentParticipants || 0) + 1;
      this.trainings.set(training.id, training);
    }
    return participant;
  }
  async updateTrainingParticipant(id, updates) {
    const participant = this.trainingParticipants.get(id);
    if (!participant) throw new Error("Training participant not found");
    const updatedParticipant = { ...participant, ...updates };
    this.trainingParticipants.set(id, updatedParticipant);
    return updatedParticipant;
  }
  async removeTrainingParticipant(trainingId, userId) {
    const participant = Array.from(this.trainingParticipants.values()).find((p) => p.trainingId === trainingId && p.userId === userId);
    if (participant) {
      this.trainingParticipants.delete(participant.id);
      const training = this.trainings.get(trainingId);
      if (training) {
        training.currentParticipants = Math.max(0, (training.currentParticipants || 0) - 1);
        this.trainings.set(training.id, training);
      }
    }
  }
  // Views Configuration Management
  viewsConfiguration = /* @__PURE__ */ new Map();
  async getViewsConfig() {
    if (this.viewsConfiguration.size === 0) {
      const defaultViews = [
        {
          id: "dashboard",
          name: "Tableau de Bord",
          description: "Vue d'accueil avec statistiques et raccourcis",
          icon: "Home",
          isVisible: true,
          sortOrder: 1,
          color: "#3B82F6",
          isCore: true,
          accessLevel: "all",
          category: "main"
        },
        {
          id: "announcements",
          name: "Annonces",
          description: "Communications officielles de l'entreprise",
          icon: "AlertTriangle",
          isVisible: true,
          sortOrder: 2,
          color: "#EF4444",
          isCore: true,
          accessLevel: "all",
          category: "communication"
        },
        {
          id: "documents",
          name: "Documents",
          description: "Biblioth\xE8que de documents et r\xE8glements",
          icon: "FileText",
          isVisible: true,
          sortOrder: 3,
          color: "#10B981",
          isCore: true,
          accessLevel: "all",
          category: "main"
        },
        {
          id: "content",
          name: "Contenu",
          description: "Galerie multim\xE9dia et ressources de formation",
          icon: "FolderOpen",
          isVisible: true,
          sortOrder: 4,
          color: "#8B5CF6",
          isCore: false,
          accessLevel: "all",
          category: "main"
        },
        {
          id: "directory",
          name: "Annuaire",
          description: "R\xE9pertoire des employ\xE9s et contacts",
          icon: "Users",
          isVisible: true,
          sortOrder: 5,
          color: "#F59E0B",
          isCore: false,
          accessLevel: "employee",
          category: "tools"
        },
        {
          id: "messages",
          name: "Messages",
          description: "Syst\xE8me de messagerie interne",
          icon: "MessageCircle",
          isVisible: true,
          sortOrder: 6,
          color: "#06B6D4",
          isCore: false,
          accessLevel: "employee",
          category: "communication"
        },
        {
          id: "complaints",
          name: "R\xE9clamations",
          description: "Syst\xE8me de gestion des plaintes et suggestions",
          icon: "AlertTriangle",
          isVisible: false,
          sortOrder: 7,
          color: "#DC2626",
          isCore: false,
          accessLevel: "employee",
          category: "management"
        },
        {
          id: "administration",
          name: "Administration",
          description: "Panneau d'administration et gestion des utilisateurs",
          icon: "Shield",
          isVisible: true,
          sortOrder: 8,
          color: "#7C3AED",
          isCore: true,
          accessLevel: "admin",
          category: "management"
        }
      ];
      defaultViews.forEach((view) => {
        this.viewsConfiguration.set(view.id, view);
      });
    }
    return Array.from(this.viewsConfiguration.values()).sort((a, b) => a.sortOrder - b.sortOrder);
  }
  async saveViewsConfig(views) {
    this.viewsConfiguration.clear();
    views.forEach((view) => {
      this.viewsConfiguration.set(view.id, view);
    });
  }
  async updateViewConfig(viewId, updates) {
    const existingView = this.viewsConfiguration.get(viewId);
    if (existingView) {
      this.viewsConfiguration.set(viewId, { ...existingView, ...updates });
    }
  }
  // User Settings Management
  userConfiguration = /* @__PURE__ */ new Map();
  async getUserSettings(userId) {
    const settings = this.userConfiguration.get(userId);
    if (!settings) {
      const defaultSettings = {
        companyName: "IntraSphere",
        companyLogo: "",
        welcomeMessage: "Bienvenue sur votre portail d'entreprise",
        contactEmail: "contact@intrasphere.com",
        displayName: "Utilisateur",
        email: "utilisateur@entreprise.com",
        bio: "",
        department: "Non sp\xE9cifi\xE9",
        position: "Employ\xE9",
        phoneNumber: "",
        location: "",
        profilePicture: "",
        emailNotifications: true,
        pushNotifications: false,
        desktopNotifications: true,
        announcementNotifications: true,
        messageNotifications: true,
        eventReminders: true,
        documentUpdates: false,
        weeklyDigest: true,
        theme: "light",
        language: "fr",
        compactMode: false,
        showSidebar: true,
        animationsEnabled: true,
        colorScheme: "purple",
        fontSize: "medium",
        profileVisible: true,
        showOnlineStatus: false,
        allowDirectMessages: true,
        shareActivityStatus: true,
        showEmailInDirectory: false,
        allowProfilePicture: true,
        developerMode: false,
        betaFeatures: false,
        analyticsEnabled: true,
        autoSave: true,
        sessionTimeout: 60
      };
      this.userConfiguration.set(userId, defaultSettings);
      return defaultSettings;
    }
    return settings;
  }
  async saveUserSettings(userId, settings) {
    try {
      if (!settings || typeof settings !== "object") {
        throw new Error("Invalid settings object");
      }
      this.userConfiguration.set(userId, { ...settings, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
      console.log("Settings saved successfully for user:", userId);
    } catch (error) {
      console.error("Error saving user settings:", error);
      throw error;
    }
  }
  async getStats() {
    const now = /* @__PURE__ */ new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1e3);
    const newAnnouncements = Array.from(this.announcements.values()).filter((ann) => ann.createdAt > weekAgo).length;
    const updatedDocuments = Array.from(this.documents.values()).filter((doc) => doc.updatedAt > weekAgo).length;
    const connectedUsers = Array.from(this.users.values()).filter((user) => user.isActive).length;
    const pendingComplaints = Array.from(this.complaints.values()).filter((complaint) => complaint.status === "open").length;
    return {
      totalUsers: this.users.size,
      totalAnnouncements: this.announcements.size,
      totalDocuments: this.documents.size,
      totalEvents: this.events.size,
      totalMessages: this.messages.size,
      totalComplaints: this.complaints.size,
      newAnnouncements,
      updatedDocuments,
      connectedUsers,
      pendingComplaints
    };
  }
  async resetToTestData() {
    const { testUsers: testUsers2, testAnnouncements: testAnnouncements2, testDocuments: testDocuments2, testEvents: testEvents2, testMessages: testMessages2, testComplaints: testComplaints2 } = await Promise.resolve().then(() => (init_testData(), testData_exports));
    this.users.clear();
    this.announcements.clear();
    this.documents.clear();
    this.events.clear();
    this.messages.clear();
    this.complaints.clear();
    this.permissions.clear();
    this.contents.clear();
    this.categories.clear();
    testUsers2.forEach((user) => this.users.set(user.id, user));
    testAnnouncements2.forEach((ann) => this.announcements.set(ann.id, ann));
    testDocuments2.forEach((doc) => this.documents.set(doc.id, doc));
    testEvents2.forEach((event) => this.events.set(event.id, event));
    testMessages2.forEach((msg) => this.messages.set(msg.id, msg));
    testComplaints2.forEach((complaint) => this.complaints.set(complaint.id, complaint));
    this.initializeDefaultCategories();
    this.initializeDefaultContent();
    console.log("\u2705 Test data has been reset successfully");
  }
  initializeDefaultCategories() {
    const defaultCategories = [
      {
        id: "cat-1",
        name: "Formation",
        color: "#10B981",
        icon: "\u{1F393}",
        description: "Mat\xE9riel de formation et apprentissage",
        isVisible: true,
        sortOrder: 1,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: "cat-2",
        name: "Actualit\xE9s",
        color: "#3B82F6",
        icon: "\u{1F4F0}",
        description: "Derni\xE8res nouvelles et informations",
        isVisible: true,
        sortOrder: 2,
        createdAt: /* @__PURE__ */ new Date()
      }
    ];
    defaultCategories.forEach((cat) => this.categories.set(cat.id, cat));
  }
  initializeDefaultContent() {
    const defaultContent = [
      {
        id: "content-1",
        title: "Guide d'int\xE9gration nouveaux employ\xE9s",
        type: "video",
        category: "Formation",
        description: "Vid\xE9o d'accueil compl\xE8te pour faciliter l'int\xE9gration des nouveaux collaborateurs.",
        thumbnailUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
        fileUrl: "/content/integration-guide.mp4",
        duration: "12 min",
        viewCount: 245,
        rating: 4,
        isPopular: true,
        isFeatured: true,
        tags: ["formation", "int\xE9gration", "nouveaux employ\xE9s"],
        createdAt: /* @__PURE__ */ new Date("2024-01-15T10:00:00Z"),
        updatedAt: /* @__PURE__ */ new Date("2024-01-15T10:00:00Z")
      }
    ];
    defaultContent.forEach((content) => this.contents.set(content.id, content));
  }
  // E-Learning System Implementation
  initializeELearningData() {
    const defaultCourses = [
      {
        id: "course-1",
        title: "Introduction aux bonnes pratiques de s\xE9curit\xE9 informatique",
        description: "D\xE9couvrez les fondamentaux de la cybers\xE9curit\xE9 et prot\xE9gez vos donn\xE9es professionnelles.",
        category: "compliance",
        difficulty: "beginner",
        duration: 120,
        thumbnailUrl: "/images/security-course.svg",
        authorId: "admin",
        authorName: "\xC9quipe S\xE9curit\xE9 IT",
        isPublished: true,
        isMandatory: true,
        prerequisites: "[]",
        tags: '["s\xE9curit\xE9", "informatique", "donn\xE9es", "obligatoire"]',
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        id: "course-2",
        title: "D\xE9veloppement personnel et leadership",
        description: "D\xE9veloppez vos comp\xE9tences de leadership et votre potentiel professionnel.",
        category: "leadership",
        difficulty: "intermediate",
        duration: 180,
        thumbnailUrl: "/images/leadership-course.svg",
        authorId: "marie.martin",
        authorName: "Marie Martin",
        isPublished: true,
        isMandatory: false,
        prerequisites: "[]",
        tags: '["leadership", "d\xE9veloppement", "management"]',
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        id: "course-3",
        title: "Communication efficace en \xE9quipe",
        description: "Am\xE9liorez votre communication interpersonnelle et vos techniques de pr\xE9sentation.",
        category: "soft-skills",
        difficulty: "beginner",
        duration: 90,
        thumbnailUrl: "/images/communication-course.svg",
        authorId: "pierre.dubois",
        authorName: "Pierre Dubois",
        isPublished: true,
        isMandatory: false,
        prerequisites: "[]",
        tags: '["communication", "\xE9quipe", "pr\xE9sentation"]',
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }
    ];
    const defaultLessons = [
      {
        id: "lesson-1",
        courseId: "course-1",
        title: "Les bases de la cybers\xE9curit\xE9",
        description: "Introduction aux concepts fondamentaux",
        content: "<h2>Bienvenue dans le monde de la cybers\xE9curit\xE9</h2><p>Dans cette le\xE7on, nous allons explorer les concepts fondamentaux...</p>",
        order: 1,
        duration: 30,
        videoUrl: "/videos/security-basics.mp4",
        documentUrl: "/docs/security-guide.pdf",
        isRequired: true,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        id: "lesson-2",
        courseId: "course-1",
        title: "Mots de passe et authentification",
        description: "Cr\xE9ez des mots de passe s\xE9curis\xE9s",
        content: "<h2>L'importance des mots de passe forts</h2><p>Un mot de passe fort est votre premi\xE8re ligne de d\xE9fense...</p>",
        order: 2,
        duration: 25,
        videoUrl: "/videos/password-security.mp4",
        documentUrl: "/docs/password-policy.pdf",
        isRequired: true,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }
    ];
    const defaultResources = [
      {
        id: "resource-1",
        title: "Guide de r\xE9f\xE9rence - Politiques de s\xE9curit\xE9",
        description: "Document complet sur les politiques de s\xE9curit\xE9 de l'entreprise",
        category: "documentation",
        type: "pdf",
        url: "/resources/security-policies.pdf",
        thumbnailUrl: "/images/pdf-icon.svg",
        authorId: "admin",
        authorName: "\xC9quipe IT",
        tags: '["s\xE9curit\xE9", "politique", "r\xE9f\xE9rence"]',
        downloadCount: 45,
        rating: 4.8,
        isPublic: true,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        id: "resource-2",
        title: "Template - Plan de formation individuel",
        description: "Mod\xE8le pour cr\xE9er votre plan de d\xE9veloppement professionnel",
        category: "template",
        type: "document",
        url: "/resources/training-plan-template.docx",
        thumbnailUrl: "/images/doc-icon.svg",
        authorId: "marie.martin",
        authorName: "Marie Martin",
        tags: '["formation", "template", "d\xE9veloppement"]',
        downloadCount: 23,
        rating: 4.5,
        isPublic: true,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }
    ];
    defaultCourses.forEach((course) => this.courses.set(course.id, course));
    defaultLessons.forEach((lesson) => this.lessons.set(lesson.id, lesson));
    defaultResources.forEach((resource) => this.resources.set(resource.id, resource));
  }
  // Courses
  async getCourses() {
    return Array.from(this.courses.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
  async getCourseById(id) {
    return this.courses.get(id);
  }
  async createCourse(insertCourse) {
    const id = (0, import_crypto2.randomUUID)();
    const course = {
      ...insertCourse,
      id,
      authorId: insertCourse.authorName || "Syst\xE8me",
      description: insertCourse.description || null,
      duration: insertCourse.duration || null,
      thumbnailUrl: insertCourse.thumbnailUrl || null,
      isPublished: insertCourse.isPublished || false,
      isMandatory: insertCourse.isMandatory || false,
      prerequisites: insertCourse.prerequisites || "[]",
      tags: insertCourse.tags || "[]",
      difficulty: insertCourse.difficulty || "beginner",
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.courses.set(id, course);
    return course;
  }
  async updateCourse(id, updates) {
    const course = this.courses.get(id);
    if (!course) throw new Error("Course not found");
    const updatedCourse = { ...course, ...updates, updatedAt: /* @__PURE__ */ new Date() };
    this.courses.set(id, updatedCourse);
    return updatedCourse;
  }
  async deleteCourse(id) {
    this.courses.delete(id);
    Array.from(this.lessons.values()).filter((lesson) => lesson.courseId === id).forEach((lesson) => this.lessons.delete(lesson.id));
  }
  // Lessons
  async getLessons(courseId) {
    return Array.from(this.lessons.values()).filter((lesson) => lesson.courseId === courseId).sort((a, b) => (a.order || 0) - (b.order || 0));
  }
  async getLessonById(id) {
    return this.lessons.get(id);
  }
  async createLesson(insertLesson) {
    const id = (0, import_crypto2.randomUUID)();
    const lesson = {
      ...insertLesson,
      id,
      description: insertLesson.description || null,
      order: insertLesson.order || 0,
      duration: insertLesson.duration || null,
      videoUrl: insertLesson.videoUrl || null,
      documentUrl: insertLesson.documentUrl || null,
      isRequired: insertLesson.isRequired !== false,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.lessons.set(id, lesson);
    return lesson;
  }
  async updateLesson(id, updates) {
    const lesson = this.lessons.get(id);
    if (!lesson) throw new Error("Lesson not found");
    const updatedLesson = { ...lesson, ...updates, updatedAt: /* @__PURE__ */ new Date() };
    this.lessons.set(id, updatedLesson);
    return updatedLesson;
  }
  async deleteLesson(id) {
    this.lessons.delete(id);
  }
  // Quizzes
  async getQuizzes(courseId) {
    return Array.from(this.quizzes.values()).filter((quiz) => quiz.courseId === courseId);
  }
  async getQuizById(id) {
    return this.quizzes.get(id);
  }
  async createQuiz(insertQuiz) {
    const id = (0, import_crypto2.randomUUID)();
    const quiz = {
      ...insertQuiz,
      id,
      courseId: insertQuiz.courseId || null,
      lessonId: insertQuiz.lessonId || null,
      description: insertQuiz.description || null,
      passingScore: insertQuiz.passingScore || 70,
      timeLimit: insertQuiz.timeLimit || null,
      allowRetries: insertQuiz.allowRetries !== false,
      maxAttempts: insertQuiz.maxAttempts || 3,
      isRequired: insertQuiz.isRequired || false,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.quizzes.set(id, quiz);
    return quiz;
  }
  async updateQuiz(id, updates) {
    const quiz = this.quizzes.get(id);
    if (!quiz) throw new Error("Quiz not found");
    const updatedQuiz = { ...quiz, ...updates, updatedAt: /* @__PURE__ */ new Date() };
    this.quizzes.set(id, updatedQuiz);
    return updatedQuiz;
  }
  async deleteQuiz(id) {
    this.quizzes.delete(id);
  }
  // Enrollments and Progress
  async getUserEnrollments(userId) {
    return Array.from(this.enrollments.values()).filter((enrollment) => enrollment.userId === userId);
  }
  async getEnrollmentById(id) {
    return this.enrollments.get(id);
  }
  async enrollUser(userId, courseId) {
    const id = (0, import_crypto2.randomUUID)();
    const enrollment = {
      id,
      userId,
      courseId,
      enrolledAt: /* @__PURE__ */ new Date(),
      startedAt: null,
      completedAt: null,
      progress: 0,
      status: "enrolled",
      certificateUrl: null
    };
    this.enrollments.set(id, enrollment);
    return enrollment;
  }
  async updateEnrollmentProgress(id, updates) {
    const enrollment = this.enrollments.get(id);
    if (!enrollment) throw new Error("Enrollment not found");
    const updatedEnrollment = { ...enrollment, ...updates };
    this.enrollments.set(id, updatedEnrollment);
    return updatedEnrollment;
  }
  async getUserLessonProgress(userId, courseId) {
    return Array.from(this.lessonProgress.values()).filter((progress) => progress.userId === userId && progress.courseId === courseId);
  }
  async updateLessonProgress(userId, lessonId, courseId, completed) {
    const key = `${userId}-${lessonId}`;
    let progress = Array.from(this.lessonProgress.values()).find((p) => p.userId === userId && p.lessonId === lessonId);
    if (!progress) {
      const id = (0, import_crypto2.randomUUID)();
      progress = {
        id,
        userId,
        lessonId,
        courseId,
        isCompleted: completed,
        timeSpent: 0,
        completedAt: completed ? /* @__PURE__ */ new Date() : null,
        createdAt: /* @__PURE__ */ new Date()
      };
    } else {
      progress.isCompleted = completed;
      progress.completedAt = completed ? /* @__PURE__ */ new Date() : null;
    }
    this.lessonProgress.set(progress.id, progress);
    return progress;
  }
  // Quiz Attempts
  async getUserQuizAttempts(userId, quizId) {
    return Array.from(this.quizAttempts.values()).filter((attempt) => attempt.userId === userId && attempt.quizId === quizId).sort((a, b) => (b.completedAt?.getTime() || 0) - (a.completedAt?.getTime() || 0));
  }
  async createQuizAttempt(attemptData) {
    const id = (0, import_crypto2.randomUUID)();
    const attempt = {
      ...attemptData,
      id,
      completedAt: /* @__PURE__ */ new Date()
    };
    this.quizAttempts.set(id, attempt);
    return attempt;
  }
  // Certificates
  async getUserCertificates(userId) {
    return Array.from(this.certificates.values()).filter((cert) => cert.userId === userId).sort((a, b) => (b.issuedAt?.getTime() || 0) - (a.issuedAt?.getTime() || 0));
  }
  async createCertificate(certData) {
    const id = (0, import_crypto2.randomUUID)();
    const certificate = {
      ...certData,
      id,
      issuedAt: /* @__PURE__ */ new Date()
    };
    this.certificates.set(id, certificate);
    return certificate;
  }
  // Resources
  async getResources() {
    return Array.from(this.resources.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
  async getResourceById(id) {
    return this.resources.get(id);
  }
  async createResource(insertResource) {
    const id = (0, import_crypto2.randomUUID)();
    const resource = {
      ...insertResource,
      id,
      description: insertResource.description || null,
      thumbnailUrl: insertResource.thumbnailUrl || null,
      authorId: insertResource.authorName || "Syst\xE8me",
      tags: insertResource.tags || "[]",
      downloadCount: 0,
      rating: 0,
      isPublic: insertResource.isPublic !== false,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.resources.set(id, resource);
    return resource;
  }
  async updateResource(id, updates) {
    const resource = this.resources.get(id);
    if (!resource) throw new Error("Resource not found");
    const updatedResource = { ...resource, ...updates, updatedAt: /* @__PURE__ */ new Date() };
    this.resources.set(id, updatedResource);
    return updatedResource;
  }
  async deleteResource(id) {
    this.resources.delete(id);
  }
  // Search functionality
  async searchUsers(query) {
    const searchTerm = query.toLowerCase();
    return Array.from(this.users.values()).filter(
      (user) => user.isActive && (user.name.toLowerCase().includes(searchTerm) || user.position?.toLowerCase().includes(searchTerm) || user.department?.toLowerCase().includes(searchTerm) || user.email?.toLowerCase().includes(searchTerm))
    );
  }
  // Forum System Implementation
  // Forum Categories
  async getForumCategories() {
    return Array.from(this.forumCategories.values()).filter((category) => category.isActive).sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  }
  async getForumCategoryById(id) {
    return this.forumCategories.get(id);
  }
  async createForumCategory(insertCategory) {
    const id = (0, import_crypto2.randomUUID)();
    const category = {
      ...insertCategory,
      id,
      description: insertCategory.description || null,
      color: insertCategory.color || "#3B82F6",
      icon: insertCategory.icon || "\u{1F4AC}",
      sortOrder: insertCategory.sortOrder || 0,
      isActive: insertCategory.isActive !== false,
      isModerated: insertCategory.isModerated || false,
      accessLevel: insertCategory.accessLevel || "all",
      moderatorIds: insertCategory.moderatorIds || null,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.forumCategories.set(id, category);
    return category;
  }
  async updateForumCategory(id, updates) {
    const category = this.forumCategories.get(id);
    if (!category) throw new Error("Forum category not found");
    const updatedCategory = { ...category, ...updates };
    this.forumCategories.set(id, updatedCategory);
    return updatedCategory;
  }
  async deleteForumCategory(id) {
    const topics = Array.from(this.forumTopics.values()).filter((t) => t.categoryId === id);
    for (const topic of topics) {
      await this.deleteForumTopic(topic.id);
    }
    this.forumCategories.delete(id);
  }
  // Forum Topics
  async getForumTopics(categoryId) {
    let topics = Array.from(this.forumTopics.values());
    if (categoryId) {
      topics = topics.filter((topic) => topic.categoryId === categoryId);
    }
    return topics.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return (b.lastReplyAt?.getTime() || b.createdAt?.getTime() || 0) - (a.lastReplyAt?.getTime() || a.createdAt?.getTime() || 0);
    });
  }
  async getForumTopicById(id) {
    return this.forumTopics.get(id);
  }
  async createForumTopic(insertTopic) {
    const id = (0, import_crypto2.randomUUID)();
    const topic = {
      ...insertTopic,
      id,
      description: insertTopic.description || null,
      isPinned: insertTopic.isPinned || false,
      isLocked: insertTopic.isLocked || false,
      isAnnouncement: insertTopic.isAnnouncement || false,
      viewCount: 0,
      replyCount: 0,
      lastReplyAt: null,
      lastReplyBy: null,
      lastReplyByName: null,
      tags: insertTopic.tags || null,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.forumTopics.set(id, topic);
    await this.updateUserTopicCount(insertTopic.authorId, 1);
    return topic;
  }
  async updateForumTopic(id, updates) {
    const topic = this.forumTopics.get(id);
    if (!topic) throw new Error("Forum topic not found");
    const updatedTopic = { ...topic, ...updates, updatedAt: /* @__PURE__ */ new Date() };
    this.forumTopics.set(id, updatedTopic);
    return updatedTopic;
  }
  async deleteForumTopic(id) {
    const topic = this.forumTopics.get(id);
    if (topic) {
      const posts = Array.from(this.forumPosts.values()).filter((p) => p.topicId === id);
      for (const post of posts) {
        this.forumPosts.delete(post.id);
        const likes = Array.from(this.forumLikes.values()).filter((l) => l.postId === post.id);
        for (const like of likes) {
          this.forumLikes.delete(like.id);
        }
      }
      await this.updateUserTopicCount(topic.authorId, -1);
      this.forumTopics.delete(id);
    }
  }
  async incrementTopicViews(id) {
    const topic = this.forumTopics.get(id);
    if (topic) {
      topic.viewCount = (topic.viewCount || 0) + 1;
      this.forumTopics.set(id, topic);
    }
  }
  // Forum Posts
  async getForumPosts(topicId) {
    return Array.from(this.forumPosts.values()).filter((post) => post.topicId === topicId && !post.isDeleted).sort((a, b) => (a.createdAt?.getTime() || 0) - (b.createdAt?.getTime() || 0));
  }
  async getForumPostById(id) {
    const post = this.forumPosts.get(id);
    return post && !post.isDeleted ? post : void 0;
  }
  async createForumPost(insertPost) {
    const id = (0, import_crypto2.randomUUID)();
    const post = {
      ...insertPost,
      id,
      isFirstPost: insertPost.isFirstPost || false,
      parentPostId: insertPost.parentPostId || null,
      likeCount: 0,
      isEdited: false,
      editedAt: null,
      editedBy: null,
      isDeleted: false,
      deletedAt: null,
      deletedBy: null,
      attachments: insertPost.attachments || null,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.forumPosts.set(id, post);
    const topic = this.forumTopics.get(insertPost.topicId);
    if (topic && !insertPost.isFirstPost) {
      topic.replyCount = (topic.replyCount || 0) + 1;
      topic.lastReplyAt = post.createdAt;
      topic.lastReplyBy = insertPost.authorId;
      topic.lastReplyByName = insertPost.authorName;
      this.forumTopics.set(insertPost.topicId, topic);
    }
    await this.updateUserPostCount(insertPost.authorId, 1);
    return post;
  }
  async updateForumPost(id, updates) {
    const post = this.forumPosts.get(id);
    if (!post || post.isDeleted) throw new Error("Forum post not found");
    const updatedPost = {
      ...post,
      ...updates,
      isEdited: true,
      editedAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.forumPosts.set(id, updatedPost);
    return updatedPost;
  }
  async deleteForumPost(id, deletedBy) {
    const post = this.forumPosts.get(id);
    if (post && !post.isDeleted) {
      post.isDeleted = true;
      post.deletedAt = /* @__PURE__ */ new Date();
      post.deletedBy = deletedBy;
      this.forumPosts.set(id, post);
      const topic = this.forumTopics.get(post.topicId);
      if (topic && !post.isFirstPost) {
        topic.replyCount = Math.max((topic.replyCount || 0) - 1, 0);
        this.forumTopics.set(post.topicId, topic);
      }
      await this.updateUserPostCount(post.authorId, -1);
      const likes = Array.from(this.forumLikes.values()).filter((l) => l.postId === id);
      for (const like of likes) {
        this.forumLikes.delete(like.id);
      }
    }
  }
  // Forum Likes/Reactions
  async getForumPostLikes(postId) {
    return Array.from(this.forumLikes.values()).filter((like) => like.postId === postId);
  }
  async toggleForumPostLike(insertLike) {
    const existingLike = Array.from(this.forumLikes.values()).find((like) => like.postId === insertLike.postId && like.userId === insertLike.userId);
    if (existingLike) {
      this.forumLikes.delete(existingLike.id);
      const post = this.forumPosts.get(insertLike.postId);
      if (post) {
        post.likeCount = Math.max((post.likeCount || 0) - 1, 0);
        this.forumPosts.set(insertLike.postId, post);
      }
      return null;
    } else {
      const id = (0, import_crypto2.randomUUID)();
      const like = {
        ...insertLike,
        id,
        reactionType: insertLike.reactionType || "like",
        createdAt: /* @__PURE__ */ new Date()
      };
      this.forumLikes.set(id, like);
      const post = this.forumPosts.get(insertLike.postId);
      if (post) {
        post.likeCount = (post.likeCount || 0) + 1;
        this.forumPosts.set(insertLike.postId, post);
      }
      return like;
    }
  }
  async createForumLike(insertLike) {
    const id = (0, import_crypto2.randomUUID)();
    const like = {
      ...insertLike,
      id,
      reactionType: insertLike.reactionType || "like",
      createdAt: /* @__PURE__ */ new Date()
    };
    this.forumLikes.set(id, like);
    const post = this.forumPosts.get(insertLike.postId);
    if (post) {
      post.likeCount = (post.likeCount || 0) + 1;
      this.forumPosts.set(insertLike.postId, post);
    }
    return like;
  }
  // Forum User Stats
  async getForumUserStats(userId) {
    let stats = Array.from(this.forumUserStats.values()).find((s) => s.userId === userId);
    if (!stats) {
      const id = (0, import_crypto2.randomUUID)();
      stats = {
        id,
        userId,
        postCount: 0,
        topicCount: 0,
        likeCount: 0,
        reputationScore: 0,
        badges: "[]",
        joinedAt: /* @__PURE__ */ new Date(),
        lastActiveAt: /* @__PURE__ */ new Date()
      };
      this.forumUserStats.set(id, stats);
    }
    return stats;
  }
  async updateForumUserStats(userId, updates) {
    let stats = await this.getForumUserStats(userId);
    if (!stats) throw new Error("User stats not found");
    const updatedStats = { ...stats, ...updates, lastActiveAt: /* @__PURE__ */ new Date() };
    this.forumUserStats.set(stats.id, updatedStats);
    return updatedStats;
  }
  // Helper methods for forum stats
  async updateUserPostCount(userId, change) {
    const stats = await this.getForumUserStats(userId);
    if (stats) {
      stats.postCount = Math.max((stats.postCount || 0) + change, 0);
      this.forumUserStats.set(stats.id, stats);
    }
  }
  async updateUserTopicCount(userId, change) {
    const stats = await this.getForumUserStats(userId);
    if (stats) {
      stats.topicCount = Math.max((stats.topicCount || 0) + change, 0);
      this.forumUserStats.set(stats.id, stats);
    }
  }
  // Additional Forum Methods for 100% compatibility
  async updateForumTopicActivity(topicId) {
    const topic = this.forumTopics.get(topicId);
    if (topic) {
      const posts = Array.from(this.forumPosts.values()).filter((p) => p.topicId === topicId);
      const updatedTopic = {
        ...topic,
        postsCount: posts.length,
        lastPostAt: /* @__PURE__ */ new Date(),
        lastActivity: /* @__PURE__ */ new Date()
      };
      this.forumTopics.set(topicId, updatedTopic);
    }
  }
  async getForumLike(postId, userId) {
    return Array.from(this.forumLikes.values()).find(
      (like) => like.postId === postId && like.userId === userId
    );
  }
  async deleteForumLike(postId, userId) {
    const like = await this.getForumLike(postId, userId);
    if (like) {
      this.forumLikes.delete(like.id);
    }
  }
};
var useMySQL = !!(process.env.MYSQL_HOST || process.env.MYSQL_USER || process.env.MYSQL_DATABASE);
var mem = new MemStorage();
var drizzle2 = new DrizzleStorage();
var storage = useMySQL ? Object.assign(mem, drizzle2) : mem;

// server/routes/auth.ts
init_auth();

// server/services/email.ts
var import_nodemailer = __toESM(require("nodemailer"), 1);
var EmailService = class {
  transporter = null;
  isConfigured = false;
  /**
   * Configure email service with SMTP settings
   */
  configure(config) {
    try {
      this.transporter = import_nodemailer.default.createTransport({
        host: config.host,
        port: config.port,
        secure: config.secure,
        auth: config.auth
      });
      this.isConfigured = true;
      console.log("Email service configured successfully");
    } catch (error) {
      console.error("Failed to configure email service:", error);
      this.isConfigured = false;
    }
  }
  /**
   * Send an email
   */
  async sendEmail(options) {
    if (!this.isConfigured || !this.transporter) {
      console.warn("Email service not configured. Email not sent.");
      return false;
    }
    try {
      const mailOptions = {
        from: options.from || process.env.EMAIL_FROM || "noreply@intrasphere.com",
        to: Array.isArray(options.to) ? options.to.join(", ") : options.to,
        subject: options.subject,
        text: options.text,
        html: options.html || options.text
      };
      const result = await this.transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", result.messageId);
      return true;
    } catch (error) {
      console.error("Failed to send email:", error);
      return false;
    }
  }
  /**
   * Send welcome email to new user
   */
  async sendWelcomeEmail(userEmail, userName, tempPassword) {
    const subject = "Bienvenue sur IntraSphere";
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8B5CF6;">Bienvenue sur IntraSphere !</h2>
        <p>Bonjour <strong>${userName}</strong>,</p>
        <p>Votre compte IntraSphere a \xE9t\xE9 cr\xE9\xE9 avec succ\xE8s. Vous pouvez maintenant acc\xE9der \xE0 votre portail d'entreprise.</p>
        ${tempPassword ? `
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Mot de passe temporaire :</strong> <code>${tempPassword}</code></p>
            <p style="color: #ef4444; font-size: 14px;">\u26A0\uFE0F Veuillez changer votre mot de passe lors de votre premi\xE8re connexion.</p>
          </div>
        ` : ""}
        <p>Fonctionnalit\xE9s disponibles :</p>
        <ul>
          <li>\u{1F4E2} Annonces et communications</li>
          <li>\u{1F4C1} Biblioth\xE8que documentaire</li>
          <li>\u{1F4AC} Forum et discussions</li>
          <li>\u{1F4E7} Messagerie interne</li>
          <li>\u{1F4DA} Plateforme e-learning</li>
        </ul>
        <p>Cordialement,<br>L'\xE9quipe IntraSphere</p>
      </div>
    `;
    return this.sendEmail({
      to: userEmail,
      subject,
      html
    });
  }
  /**
   * Send password reset email
   */
  async sendPasswordResetEmail(userEmail, userName, resetLink) {
    const subject = "R\xE9initialisation de votre mot de passe IntraSphere";
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8B5CF6;">R\xE9initialisation de mot de passe</h2>
        <p>Bonjour <strong>${userName}</strong>,</p>
        <p>Vous avez demand\xE9 la r\xE9initialisation de votre mot de passe IntraSphere.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetLink}" style="background: #8B5CF6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block;">
            R\xE9initialiser mon mot de passe
          </a>
        </div>
        <p style="color: #6b7280; font-size: 14px;">
          Ce lien expire dans 1 heure. Si vous n'avez pas demand\xE9 cette r\xE9initialisation, ignorez cet email.
        </p>
        <p>Cordialement,<br>L'\xE9quipe IntraSphere</p>
      </div>
    `;
    return this.sendEmail({
      to: userEmail,
      subject,
      html
    });
  }
  /**
   * Send notification email
   */
  async sendNotificationEmail(userEmail, userName, notificationType, content) {
    const subject = `IntraSphere - ${notificationType}`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8B5CF6;">${notificationType}</h2>
        <p>Bonjour <strong>${userName}</strong>,</p>
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          ${content}
        </div>
        <p>Connectez-vous \xE0 IntraSphere pour plus de d\xE9tails.</p>
        <p>Cordialement,<br>L'\xE9quipe IntraSphere</p>
      </div>
    `;
    return this.sendEmail({
      to: userEmail,
      subject,
      html
    });
  }
  /**
   * Test email configuration
   */
  async testConfiguration() {
    if (!this.isConfigured || !this.transporter) {
      return false;
    }
    try {
      await this.transporter.verify();
      console.log("Email configuration test successful");
      return true;
    } catch (error) {
      console.error("Email configuration test failed:", error);
      return false;
    }
  }
};
var emailService = new EmailService();
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  emailService.configure({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

// shared/schema.ts
var import_drizzle_orm3 = require("drizzle-orm");
var import_pg_core = require("drizzle-orm/pg-core");
var import_drizzle_zod2 = require("drizzle-zod");
var import_zod = require("zod");
var users2 = (0, import_pg_core.pgTable)("users", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  username: (0, import_pg_core.text)("username").notNull().unique(),
  password: (0, import_pg_core.text)("password").notNull(),
  name: (0, import_pg_core.text)("name").notNull(),
  role: (0, import_pg_core.text)("role").notNull().default("employee"),
  // employee, admin, moderator
  avatar: (0, import_pg_core.text)("avatar"),
  // Extended fields for employee management
  employeeId: (0, import_pg_core.varchar)("employee_id").unique(),
  // Unique identifier for internal communication
  department: (0, import_pg_core.varchar)("department"),
  position: (0, import_pg_core.varchar)("position"),
  isActive: (0, import_pg_core.boolean)("is_active").default(true),
  phone: (0, import_pg_core.varchar)("phone"),
  email: (0, import_pg_core.varchar)("email"),
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow(),
  updatedAt: (0, import_pg_core.timestamp)("updated_at").defaultNow()
});
var announcements2 = (0, import_pg_core.pgTable)("announcements", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  title: (0, import_pg_core.text)("title").notNull(),
  content: (0, import_pg_core.text)("content").notNull(),
  type: (0, import_pg_core.text)("type").notNull().default("info"),
  // info, important, event, formation
  authorId: (0, import_pg_core.varchar)("author_id").references(() => users2.id),
  authorName: (0, import_pg_core.text)("author_name").notNull(),
  imageUrl: (0, import_pg_core.text)("image_url"),
  icon: (0, import_pg_core.text)("icon").default("\u{1F4E2}"),
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow().notNull(),
  isImportant: (0, import_pg_core.boolean)("is_important").default(false)
});
var documents2 = (0, import_pg_core.pgTable)("documents", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  title: (0, import_pg_core.text)("title").notNull(),
  description: (0, import_pg_core.text)("description"),
  category: (0, import_pg_core.text)("category").notNull(),
  // regulation, policy, guide, procedure
  fileName: (0, import_pg_core.text)("file_name").notNull(),
  fileUrl: (0, import_pg_core.text)("file_url").notNull(),
  updatedAt: (0, import_pg_core.timestamp)("updated_at").defaultNow().notNull(),
  version: (0, import_pg_core.text)("version").default("1.0")
});
var events2 = (0, import_pg_core.pgTable)("events", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  title: (0, import_pg_core.text)("title").notNull(),
  description: (0, import_pg_core.text)("description"),
  date: (0, import_pg_core.timestamp)("date").notNull(),
  location: (0, import_pg_core.text)("location"),
  type: (0, import_pg_core.text)("type").notNull().default("meeting"),
  // meeting, training, social, other
  organizerId: (0, import_pg_core.varchar)("organizer_id").references(() => users2.id),
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow()
});
var messages2 = (0, import_pg_core.pgTable)("messages", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  senderId: (0, import_pg_core.varchar)("sender_id").references(() => users2.id).notNull(),
  recipientId: (0, import_pg_core.varchar)("recipient_id").references(() => users2.id).notNull(),
  subject: (0, import_pg_core.text)("subject").notNull(),
  content: (0, import_pg_core.text)("content").notNull(),
  isRead: (0, import_pg_core.boolean)("is_read").default(false),
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow()
});
var complaints2 = (0, import_pg_core.pgTable)("complaints", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  submitterId: (0, import_pg_core.varchar)("submitter_id").references(() => users2.id).notNull(),
  assignedToId: (0, import_pg_core.varchar)("assigned_to_id").references(() => users2.id),
  title: (0, import_pg_core.text)("title").notNull(),
  description: (0, import_pg_core.text)("description").notNull(),
  category: (0, import_pg_core.text)("category").notNull(),
  // hr, it, facilities, other
  priority: (0, import_pg_core.text)("priority").default("medium"),
  // low, medium, high, urgent
  status: (0, import_pg_core.text)("status").default("open"),
  // open, in_progress, resolved, closed
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow(),
  updatedAt: (0, import_pg_core.timestamp)("updated_at").defaultNow()
});
var permissions2 = (0, import_pg_core.pgTable)("permissions", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  userId: (0, import_pg_core.varchar)("user_id").references(() => users2.id).notNull(),
  grantedBy: (0, import_pg_core.varchar)("granted_by").references(() => users2.id).notNull(),
  permission: (0, import_pg_core.text)("permission").notNull(),
  // manage_announcements, manage_documents, manage_events, manage_users, validate_topics, validate_posts, manage_employee_categories, manage_trainings
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow()
});
var trainings2 = (0, import_pg_core.pgTable)("trainings", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  title: (0, import_pg_core.text)("title").notNull(),
  description: (0, import_pg_core.text)("description"),
  category: (0, import_pg_core.text)("category").notNull(),
  // technical, management, safety, compliance, other
  difficulty: (0, import_pg_core.text)("difficulty").default("beginner"),
  // beginner, intermediate, advanced
  duration: (0, import_pg_core.integer)("duration").notNull(),
  // duration in minutes
  instructorId: (0, import_pg_core.varchar)("instructor_id").references(() => users2.id),
  instructorName: (0, import_pg_core.text)("instructor_name").notNull(),
  startDate: (0, import_pg_core.timestamp)("start_date"),
  endDate: (0, import_pg_core.timestamp)("end_date"),
  location: (0, import_pg_core.text)("location"),
  maxParticipants: (0, import_pg_core.integer)("max_participants"),
  currentParticipants: (0, import_pg_core.integer)("current_participants").default(0),
  isMandatory: (0, import_pg_core.boolean)("is_mandatory").default(false),
  isActive: (0, import_pg_core.boolean)("is_active").default(true),
  isVisible: (0, import_pg_core.boolean)("is_visible").default(true),
  thumbnailUrl: (0, import_pg_core.text)("thumbnail_url"),
  documentUrls: (0, import_pg_core.text)("document_urls").array().default(import_drizzle_orm3.sql`ARRAY[]::text[]`),
  // Array of document URLs
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow().notNull(),
  updatedAt: (0, import_pg_core.timestamp)("updated_at").defaultNow()
});
var trainingParticipants = (0, import_pg_core.pgTable)("training_participants", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  trainingId: (0, import_pg_core.varchar)("training_id").references(() => trainings2.id, { onDelete: "cascade" }).notNull(),
  userId: (0, import_pg_core.varchar)("user_id").references(() => users2.id, { onDelete: "cascade" }).notNull(),
  registeredAt: (0, import_pg_core.timestamp)("registered_at").defaultNow(),
  status: (0, import_pg_core.text)("status").default("registered"),
  // registered, completed, cancelled
  completionDate: (0, import_pg_core.timestamp)("completion_date"),
  score: (0, import_pg_core.integer)("score"),
  // 0-100
  feedback: (0, import_pg_core.text)("feedback")
});
var insertUserSchema2 = (0, import_drizzle_zod2.createInsertSchema)(users2).pick({
  username: true,
  password: true,
  name: true,
  role: true,
  avatar: true,
  employeeId: true,
  department: true,
  position: true,
  phone: true,
  email: true
});
var insertAnnouncementSchema2 = (0, import_drizzle_zod2.createInsertSchema)(announcements2).pick({
  title: true,
  content: true,
  type: true,
  authorName: true,
  isImportant: true
}).extend({
  imageUrl: import_zod.z.string().optional(),
  icon: import_zod.z.string().optional()
});
var insertDocumentSchema2 = (0, import_drizzle_zod2.createInsertSchema)(documents2).pick({
  title: true,
  description: true,
  category: true,
  fileName: true,
  fileUrl: true,
  version: true
});
var insertEventSchema2 = (0, import_drizzle_zod2.createInsertSchema)(events2).pick({
  title: true,
  description: true,
  date: true,
  location: true,
  type: true,
  organizerId: true
});
var insertMessageSchema2 = (0, import_drizzle_zod2.createInsertSchema)(messages2).pick({
  senderId: true,
  recipientId: true,
  subject: true,
  content: true
});
var insertComplaintSchema2 = (0, import_drizzle_zod2.createInsertSchema)(complaints2).pick({
  submitterId: true,
  assignedToId: true,
  title: true,
  description: true,
  category: true,
  priority: true
});
var contents = (0, import_pg_core.pgTable)("contents", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  title: (0, import_pg_core.text)("title").notNull(),
  type: (0, import_pg_core.text)("type").notNull(),
  // video, image, document, audio
  category: (0, import_pg_core.text)("category").notNull(),
  description: (0, import_pg_core.text)("description"),
  fileUrl: (0, import_pg_core.text)("file_url").notNull(),
  thumbnailUrl: (0, import_pg_core.text)("thumbnail_url"),
  duration: (0, import_pg_core.text)("duration"),
  viewCount: (0, import_pg_core.integer)("view_count").default(0),
  rating: (0, import_pg_core.integer)("rating").default(0),
  tags: (0, import_pg_core.text)("tags").array(),
  isPopular: (0, import_pg_core.boolean)("is_popular").default(false),
  isFeatured: (0, import_pg_core.boolean)("is_featured").default(false),
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow().notNull(),
  updatedAt: (0, import_pg_core.timestamp)("updated_at").defaultNow().notNull()
});
var categories = (0, import_pg_core.pgTable)("categories", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  name: (0, import_pg_core.text)("name").notNull().unique(),
  description: (0, import_pg_core.text)("description"),
  icon: (0, import_pg_core.text)("icon").default("\u{1F4C1}"),
  color: (0, import_pg_core.text)("color").default("#3B82F6"),
  isVisible: (0, import_pg_core.boolean)("is_visible").default(true),
  sortOrder: (0, import_pg_core.integer)("sort_order").default(0),
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow().notNull()
});
var employeeCategories = (0, import_pg_core.pgTable)("employee_categories", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  name: (0, import_pg_core.text)("name").notNull().unique(),
  description: (0, import_pg_core.text)("description"),
  color: (0, import_pg_core.text)("color").default("#10B981"),
  permissions: (0, import_pg_core.text)("permissions").array().default(import_drizzle_orm3.sql`ARRAY[]::text[]`),
  // Array of permission codes
  isActive: (0, import_pg_core.boolean)("is_active").default(true),
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow().notNull()
});
var systemSettings = (0, import_pg_core.pgTable)("system_settings", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default("settings"),
  showAnnouncements: (0, import_pg_core.boolean)("show_announcements").default(true),
  showContent: (0, import_pg_core.boolean)("show_content").default(true),
  showDocuments: (0, import_pg_core.boolean)("show_documents").default(true),
  showForum: (0, import_pg_core.boolean)("show_forum").default(true),
  showMessages: (0, import_pg_core.boolean)("show_messages").default(true),
  showComplaints: (0, import_pg_core.boolean)("show_complaints").default(true),
  showTraining: (0, import_pg_core.boolean)("show_training").default(true),
  updatedAt: (0, import_pg_core.timestamp)("updated_at").defaultNow()
});
var insertPermissionSchema = (0, import_drizzle_zod2.createInsertSchema)(permissions2).pick({
  userId: true,
  grantedBy: true,
  permission: true
});
var insertContentSchema = (0, import_drizzle_zod2.createInsertSchema)(contents).pick({
  title: true,
  type: true,
  category: true,
  description: true,
  thumbnailUrl: true,
  fileUrl: true,
  duration: true,
  isPopular: true,
  isFeatured: true,
  tags: true
});
var insertCategorySchema = (0, import_drizzle_zod2.createInsertSchema)(categories).pick({
  name: true,
  color: true,
  icon: true,
  description: true,
  isVisible: true,
  sortOrder: true
});
var insertEmployeeCategorySchema = (0, import_drizzle_zod2.createInsertSchema)(employeeCategories).pick({
  name: true,
  description: true,
  color: true,
  permissions: true,
  isActive: true
});
var insertSystemSettingsSchema = (0, import_drizzle_zod2.createInsertSchema)(systemSettings).pick({
  showAnnouncements: true,
  showContent: true,
  showDocuments: true,
  showForum: true,
  showMessages: true,
  showComplaints: true,
  showTraining: true
});
var insertTrainingSchema2 = (0, import_drizzle_zod2.createInsertSchema)(trainings2).pick({
  title: true,
  description: true,
  category: true,
  difficulty: true,
  duration: true,
  instructorName: true,
  startDate: true,
  endDate: true,
  location: true,
  maxParticipants: true,
  isMandatory: true,
  isActive: true,
  isVisible: true,
  thumbnailUrl: true,
  documentUrls: true
});
var insertTrainingParticipantSchema = (0, import_drizzle_zod2.createInsertSchema)(trainingParticipants).pick({
  trainingId: true,
  userId: true,
  status: true,
  completionDate: true,
  score: true,
  feedback: true
});
var courses = (0, import_pg_core.pgTable)("courses", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  title: (0, import_pg_core.text)("title").notNull(),
  description: (0, import_pg_core.text)("description"),
  category: (0, import_pg_core.text)("category").notNull(),
  // technical, compliance, soft-skills, leadership
  difficulty: (0, import_pg_core.text)("difficulty").notNull().default("beginner"),
  // beginner, intermediate, advanced
  duration: (0, import_pg_core.integer)("duration"),
  // in minutes
  thumbnailUrl: (0, import_pg_core.text)("thumbnail_url"),
  authorId: (0, import_pg_core.varchar)("author_id").references(() => users2.id),
  authorName: (0, import_pg_core.text)("author_name").notNull(),
  isPublished: (0, import_pg_core.boolean)("is_published").default(false),
  isMandatory: (0, import_pg_core.boolean)("is_mandatory").default(false),
  prerequisites: (0, import_pg_core.text)("prerequisites"),
  // JSON array of course IDs
  tags: (0, import_pg_core.text)("tags"),
  // JSON array of tags
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow(),
  updatedAt: (0, import_pg_core.timestamp)("updated_at").defaultNow()
});
var lessons = (0, import_pg_core.pgTable)("lessons", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  courseId: (0, import_pg_core.varchar)("course_id").references(() => courses.id).notNull(),
  title: (0, import_pg_core.text)("title").notNull(),
  description: (0, import_pg_core.text)("description"),
  content: (0, import_pg_core.text)("content").notNull(),
  // HTML content
  order: (0, import_pg_core.integer)("order").default(0),
  duration: (0, import_pg_core.integer)("duration"),
  // in minutes
  videoUrl: (0, import_pg_core.text)("video_url"),
  documentUrl: (0, import_pg_core.text)("document_url"),
  isRequired: (0, import_pg_core.boolean)("is_required").default(true),
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow(),
  updatedAt: (0, import_pg_core.timestamp)("updated_at").defaultNow()
});
var quizzes = (0, import_pg_core.pgTable)("quizzes", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  courseId: (0, import_pg_core.varchar)("course_id").references(() => courses.id),
  lessonId: (0, import_pg_core.varchar)("lesson_id").references(() => lessons.id),
  title: (0, import_pg_core.text)("title").notNull(),
  description: (0, import_pg_core.text)("description"),
  questions: (0, import_pg_core.text)("questions").notNull(),
  // JSON array of questions
  passingScore: (0, import_pg_core.integer)("passing_score").default(70),
  // percentage
  timeLimit: (0, import_pg_core.integer)("time_limit"),
  // in minutes
  allowRetries: (0, import_pg_core.boolean)("allow_retries").default(true),
  maxAttempts: (0, import_pg_core.integer)("max_attempts").default(3),
  isRequired: (0, import_pg_core.boolean)("is_required").default(false),
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow(),
  updatedAt: (0, import_pg_core.timestamp)("updated_at").defaultNow()
});
var enrollments = (0, import_pg_core.pgTable)("enrollments", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  userId: (0, import_pg_core.varchar)("user_id").references(() => users2.id).notNull(),
  courseId: (0, import_pg_core.varchar)("course_id").references(() => courses.id).notNull(),
  enrolledAt: (0, import_pg_core.timestamp)("enrolled_at").defaultNow(),
  startedAt: (0, import_pg_core.timestamp)("started_at"),
  completedAt: (0, import_pg_core.timestamp)("completed_at"),
  progress: (0, import_pg_core.integer)("progress").default(0),
  // percentage
  status: (0, import_pg_core.text)("status").default("enrolled"),
  // enrolled, in-progress, completed, failed
  certificateUrl: (0, import_pg_core.text)("certificate_url")
});
var lessonProgress = (0, import_pg_core.pgTable)("lesson_progress", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  userId: (0, import_pg_core.varchar)("user_id").references(() => users2.id).notNull(),
  lessonId: (0, import_pg_core.varchar)("lesson_id").references(() => lessons.id).notNull(),
  courseId: (0, import_pg_core.varchar)("course_id").references(() => courses.id).notNull(),
  isCompleted: (0, import_pg_core.boolean)("is_completed").default(false),
  timeSpent: (0, import_pg_core.integer)("time_spent").default(0),
  // in minutes
  completedAt: (0, import_pg_core.timestamp)("completed_at"),
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow()
});
var quizAttempts = (0, import_pg_core.pgTable)("quiz_attempts", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  userId: (0, import_pg_core.varchar)("user_id").references(() => users2.id).notNull(),
  quizId: (0, import_pg_core.varchar)("quiz_id").references(() => quizzes.id).notNull(),
  courseId: (0, import_pg_core.varchar)("course_id").references(() => courses.id).notNull(),
  answers: (0, import_pg_core.text)("answers").notNull(),
  // JSON array of answers
  score: (0, import_pg_core.integer)("score"),
  // percentage
  passed: (0, import_pg_core.boolean)("passed").default(false),
  attemptNumber: (0, import_pg_core.integer)("attempt_number").default(1),
  timeSpent: (0, import_pg_core.integer)("time_spent"),
  // in minutes
  completedAt: (0, import_pg_core.timestamp)("completed_at").defaultNow()
});
var certificates = (0, import_pg_core.pgTable)("certificates", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  userId: (0, import_pg_core.varchar)("user_id").references(() => users2.id).notNull(),
  courseId: (0, import_pg_core.varchar)("course_id").references(() => courses.id).notNull(),
  title: (0, import_pg_core.text)("title").notNull(),
  description: (0, import_pg_core.text)("description"),
  certificateUrl: (0, import_pg_core.text)("certificate_url"),
  validUntil: (0, import_pg_core.timestamp)("valid_until"),
  issuedAt: (0, import_pg_core.timestamp)("issued_at").defaultNow()
});
var resources = (0, import_pg_core.pgTable)("resources", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  title: (0, import_pg_core.text)("title").notNull(),
  description: (0, import_pg_core.text)("description"),
  category: (0, import_pg_core.text)("category").notNull(),
  // documentation, template, guide, reference
  type: (0, import_pg_core.text)("type").notNull(),
  // pdf, video, link, document
  url: (0, import_pg_core.text)("url").notNull(),
  thumbnailUrl: (0, import_pg_core.text)("thumbnail_url"),
  authorId: (0, import_pg_core.varchar)("author_id").references(() => users2.id),
  authorName: (0, import_pg_core.text)("author_name").notNull(),
  tags: (0, import_pg_core.text)("tags"),
  // JSON array of tags
  downloadCount: (0, import_pg_core.integer)("download_count").default(0),
  rating: (0, import_pg_core.real)("rating").default(0),
  isPublic: (0, import_pg_core.boolean)("is_public").default(true),
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow(),
  updatedAt: (0, import_pg_core.timestamp)("updated_at").defaultNow()
});
var insertCourseSchema = (0, import_drizzle_zod2.createInsertSchema)(courses).pick({
  title: true,
  description: true,
  category: true,
  difficulty: true,
  duration: true,
  thumbnailUrl: true,
  authorName: true,
  isPublished: true,
  isMandatory: true,
  prerequisites: true,
  tags: true
});
var insertLessonSchema = (0, import_drizzle_zod2.createInsertSchema)(lessons).pick({
  courseId: true,
  title: true,
  description: true,
  content: true,
  order: true,
  duration: true,
  videoUrl: true,
  documentUrl: true,
  isRequired: true
});
var insertQuizSchema = (0, import_drizzle_zod2.createInsertSchema)(quizzes).pick({
  courseId: true,
  lessonId: true,
  title: true,
  description: true,
  questions: true,
  passingScore: true,
  timeLimit: true,
  allowRetries: true,
  maxAttempts: true,
  isRequired: true
});
var insertResourceSchema = (0, import_drizzle_zod2.createInsertSchema)(resources).pick({
  title: true,
  description: true,
  category: true,
  type: true,
  url: true,
  thumbnailUrl: true,
  authorName: true,
  tags: true,
  isPublic: true
});
var forumCategories2 = (0, import_pg_core.pgTable)("forum_categories", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  name: (0, import_pg_core.text)("name").notNull(),
  description: (0, import_pg_core.text)("description"),
  color: (0, import_pg_core.text)("color").default("#3B82F6"),
  icon: (0, import_pg_core.text)("icon").default("\u{1F4AC}"),
  sortOrder: (0, import_pg_core.integer)("sort_order").default(0),
  isActive: (0, import_pg_core.boolean)("is_active").default(true),
  isModerated: (0, import_pg_core.boolean)("is_moderated").default(false),
  accessLevel: (0, import_pg_core.text)("access_level").default("all"),
  // all, employee, moderator, admin
  moderatorIds: (0, import_pg_core.text)("moderator_ids"),
  // JSON array of user IDs
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow()
});
var forumTopics2 = (0, import_pg_core.pgTable)("forum_topics", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  categoryId: (0, import_pg_core.varchar)("category_id").references(() => forumCategories2.id).notNull(),
  title: (0, import_pg_core.text)("title").notNull(),
  description: (0, import_pg_core.text)("description"),
  authorId: (0, import_pg_core.varchar)("author_id").references(() => users2.id).notNull(),
  authorName: (0, import_pg_core.text)("author_name").notNull(),
  isPinned: (0, import_pg_core.boolean)("is_pinned").default(false),
  isLocked: (0, import_pg_core.boolean)("is_locked").default(false),
  isAnnouncement: (0, import_pg_core.boolean)("is_announcement").default(false),
  viewCount: (0, import_pg_core.integer)("view_count").default(0),
  replyCount: (0, import_pg_core.integer)("reply_count").default(0),
  lastReplyAt: (0, import_pg_core.timestamp)("last_reply_at"),
  lastReplyBy: (0, import_pg_core.varchar)("last_reply_by").references(() => users2.id),
  lastReplyByName: (0, import_pg_core.text)("last_reply_by_name"),
  tags: (0, import_pg_core.text)("tags"),
  // JSON array of tags
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow(),
  updatedAt: (0, import_pg_core.timestamp)("updated_at").defaultNow()
});
var forumPosts2 = (0, import_pg_core.pgTable)("forum_posts", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  topicId: (0, import_pg_core.varchar)("topic_id").references(() => forumTopics2.id).notNull(),
  categoryId: (0, import_pg_core.varchar)("category_id").references(() => forumCategories2.id).notNull(),
  authorId: (0, import_pg_core.varchar)("author_id").references(() => users2.id).notNull(),
  authorName: (0, import_pg_core.text)("author_name").notNull(),
  content: (0, import_pg_core.text)("content").notNull(),
  isFirstPost: (0, import_pg_core.boolean)("is_first_post").default(false),
  // Original topic post
  parentPostId: (0, import_pg_core.varchar)("parent_post_id"),
  // For threaded replies - self-reference handled separately
  likeCount: (0, import_pg_core.integer)("like_count").default(0),
  isEdited: (0, import_pg_core.boolean)("is_edited").default(false),
  editedAt: (0, import_pg_core.timestamp)("edited_at"),
  editedBy: (0, import_pg_core.varchar)("edited_by").references(() => users2.id),
  isDeleted: (0, import_pg_core.boolean)("is_deleted").default(false),
  deletedAt: (0, import_pg_core.timestamp)("deleted_at"),
  deletedBy: (0, import_pg_core.varchar)("deleted_by").references(() => users2.id),
  attachments: (0, import_pg_core.text)("attachments"),
  // JSON array of file URLs
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow(),
  updatedAt: (0, import_pg_core.timestamp)("updated_at").defaultNow()
});
var forumLikes2 = (0, import_pg_core.pgTable)("forum_likes", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  postId: (0, import_pg_core.varchar)("post_id").references(() => forumPosts2.id).notNull(),
  userId: (0, import_pg_core.varchar)("user_id").references(() => users2.id).notNull(),
  reactionType: (0, import_pg_core.text)("reaction_type").default("like"),
  // like, love, laugh, angry, sad
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow()
});
var forumUserStats = (0, import_pg_core.pgTable)("forum_user_stats", {
  id: (0, import_pg_core.varchar)("id").primaryKey().default(import_drizzle_orm3.sql`gen_random_uuid()`),
  userId: (0, import_pg_core.varchar)("user_id").references(() => users2.id).notNull().unique(),
  postCount: (0, import_pg_core.integer)("post_count").default(0),
  topicCount: (0, import_pg_core.integer)("topic_count").default(0),
  likeCount: (0, import_pg_core.integer)("like_count").default(0),
  reputationScore: (0, import_pg_core.integer)("reputation_score").default(0),
  badges: (0, import_pg_core.text)("badges"),
  // JSON array of earned badges
  joinedAt: (0, import_pg_core.timestamp)("joined_at").defaultNow(),
  lastActiveAt: (0, import_pg_core.timestamp)("last_active_at")
});
var insertForumCategorySchema = (0, import_drizzle_zod2.createInsertSchema)(forumCategories2).pick({
  name: true,
  description: true,
  color: true,
  icon: true,
  sortOrder: true,
  isActive: true,
  isModerated: true,
  accessLevel: true,
  moderatorIds: true
});
var insertForumTopicSchema = (0, import_drizzle_zod2.createInsertSchema)(forumTopics2).pick({
  categoryId: true,
  title: true,
  description: true,
  authorId: true,
  authorName: true,
  isPinned: true,
  isLocked: true,
  isAnnouncement: true,
  tags: true
});
var insertForumPostSchema = (0, import_drizzle_zod2.createInsertSchema)(forumPosts2).pick({
  topicId: true,
  categoryId: true,
  authorId: true,
  authorName: true,
  content: true,
  isFirstPost: true,
  parentPostId: true,
  attachments: true
});
var insertForumLikeSchema = (0, import_drizzle_zod2.createInsertSchema)(forumLikes2).pick({
  postId: true,
  userId: true,
  reactionType: true
});

// server/utils/rate-limiter.ts
var RateLimiter = class {
  static storage = /* @__PURE__ */ new Map();
  /**
   * Vérifier et enregistrer une tentative
   */
  static checkRateLimit(key, maxAttempts = 5, windowSeconds = 300) {
    const now = Date.now();
    const windowStart = now - windowSeconds * 1e3;
    let data = this.storage.get(key);
    if (!data) {
      data = { attempts: [], lastReset: now };
      this.storage.set(key, data);
    }
    data.attempts = data.attempts.filter((timestamp3) => timestamp3 > windowStart);
    if (data.attempts.length >= maxAttempts) {
      return false;
    }
    data.attempts.push(now);
    return true;
  }
  /**
   * Obtenir le nombre de tentatives restantes
   */
  static getRemainingAttempts(key, maxAttempts = 5, windowSeconds = 300) {
    const now = Date.now();
    const windowStart = now - windowSeconds * 1e3;
    const data = this.storage.get(key);
    if (!data) {
      return maxAttempts;
    }
    const recentAttempts = data.attempts.filter((timestamp3) => timestamp3 > windowStart);
    return Math.max(0, maxAttempts - recentAttempts.length);
  }
  /**
   * Obtenir le temps d'attente avant la prochaine tentative
   */
  static getRetryAfter(key, windowSeconds = 300) {
    const data = this.storage.get(key);
    if (!data || data.attempts.length === 0) {
      return 0;
    }
    const oldestAttempt = Math.min(...data.attempts);
    const nextAllowedTime = oldestAttempt + windowSeconds * 1e3;
    return Math.max(0, Math.ceil((nextAllowedTime - Date.now()) / 1e3));
  }
  /**
   * Réinitialiser les tentatives pour une clé
   */
  static resetAttempts(key) {
    this.storage.delete(key);
  }
  /**
   * Configurations prédéfinies (harmonisées avec PHP)
   */
  static getConfig(endpoint) {
    const configs = {
      "login": { maxAttempts: 5, windowSeconds: 300 },
      // 5 tentatives en 5 minutes
      "forgot_password": { maxAttempts: 3, windowSeconds: 3600 },
      // 3 tentatives en 1 heure
      "register": { maxAttempts: 3, windowSeconds: 900 },
      // 3 tentatives en 15 minutes
      "api_general": { maxAttempts: 100, windowSeconds: 3600 },
      // 100 requêtes par heure
      "upload": { maxAttempts: 10, windowSeconds: 600 }
      // 10 uploads en 10 minutes
    };
    return configs[endpoint] ?? { maxAttempts: 50, windowSeconds: 3600 };
  }
  /**
   * Middleware Express pour rate limiting
   */
  static middleware(endpoint, identifier) {
    return (req, res, next) => {
      const config = this.getConfig(endpoint);
      const key = `${endpoint}_${identifier ?? req.ip ?? "unknown"}`;
      if (!this.checkRateLimit(key, config.maxAttempts, config.windowSeconds)) {
        const retryAfter = this.getRetryAfter(key, config.windowSeconds);
        return res.status(429).json({
          message: `Trop de tentatives. R\xE9essayez dans ${retryAfter} secondes.`,
          retryAfter
        });
      }
      next();
    };
  }
  /**
   * Nettoyer les entrées expirées
   */
  static cleanup() {
    let cleaned = 0;
    const now = Date.now();
    for (const [key, data] of Array.from(this.storage.entries())) {
      if (now - data.lastReset > 24 * 60 * 60 * 1e3) {
        this.storage.delete(key);
        cleaned++;
      }
    }
    return cleaned;
  }
  /**
   * Obtenir les statistiques du rate limiter
   */
  static getStats() {
    this.cleanup();
    return {
      totalKeys: this.storage.size,
      memoryUsage: process.memoryUsage().heapUsed
    };
  }
};
setInterval(() => {
  RateLimiter.cleanup();
}, 60 * 60 * 1e3);

// server/routes/auth.ts
function registerAuthRoutes(app2) {
  app2.post("/api/auth/login", RateLimiter.middleware("login"), async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
      }
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const isValidPassword = await AuthService.verifyPassword(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      if (!user.isActive) {
        return res.status(401).json({ message: "Account is deactivated" });
      }
      req.session.userId = user.id;
      req.session.user = user;
      const { password: _, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/auth/register", RateLimiter.middleware("register"), async (req, res) => {
    try {
      const passwordValidation = AuthService.validatePasswordStrength(req.body.password);
      if (!passwordValidation.isValid) {
        return res.status(400).json({
          message: "Mot de passe invalide",
          errors: passwordValidation.errors
        });
      }
      const result = insertUserSchema2.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          message: "Invalid user data",
          errors: result.error.issues
        });
      }
      const existingUser = await storage.getUserByUsername(result.data.username);
      if (existingUser) {
        return res.status(409).json({ message: "Username already exists" });
      }
      const hashedPassword = await AuthService.hashPassword(result.data.password);
      const newUser = await storage.createUser({
        ...result.data,
        password: hashedPassword,
        role: "employee"
      });
      if (result.data.email) {
        await emailService.sendWelcomeEmail(result.data.email, result.data.name);
      }
      const { password: _, ...userWithoutPassword } = newUser;
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/auth/me", async (req, res) => {
    try {
      if (!req.session?.userId) {
        return res.status(401).json({ message: "Not authenticated" });
      }
      const user = await storage.getUser(req.session.userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      const { password: _, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error) {
      console.error("Auth check error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Could not log out" });
      }
      res.json({ message: "Logged out successfully" });
    });
  });
  app2.get("/api/stats", async (req, res) => {
    try {
      const stats = await storage.getStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch stats" });
    }
  });
}

// server/routes/users.ts
var requireAuth = (req, res, next) => {
  if (!req.session?.userId) {
    return res.status(401).json({ message: "Authentication required" });
  }
  next();
};
var requireRole = (roles) => {
  return async (req, res, next) => {
    if (!req.session?.userId) {
      return res.status(401).json({ message: "Authentication required" });
    }
    const user = await storage.getUser(req.session.userId);
    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }
    req.user = user;
    next();
  };
};
function registerUsersRoutes(app2) {
  app2.get("/api/users", requireAuth, async (req, res) => {
    try {
      const users3 = await storage.getUsers();
      res.json(users3);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  });
  app2.get("/api/users/:id", requireAuth, async (req, res) => {
    try {
      const user = await storage.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const { password: _, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Failed to fetch user" });
    }
  });
  app2.post("/api/users", requireRole(["admin"]), async (req, res) => {
    try {
      const result = insertUserSchema2.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid user data", errors: result.error.issues });
      }
      const user = await storage.createUser(result.data);
      res.status(201).json(user);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Failed to create user" });
    }
  });
  app2.patch("/api/users/:id", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const currentUserId = req.session.userId;
      if (id !== currentUserId) {
        const currentUser = await storage.getUser(currentUserId);
        if (!currentUser || currentUser.role !== "admin") {
          return res.status(403).json({ message: "Insufficient permissions" });
        }
      }
      const updatedUser = await storage.updateUser(id, req.body);
      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Failed to update user" });
    }
  });
  app2.delete("/api/users/:id", requireRole(["admin"]), async (req, res) => {
    try {
      const { id } = req.params;
      await storage.updateUser(id, { isActive: false });
      res.json({ message: "User deactivated successfully" });
    } catch (error) {
      console.error("Error deactivating user:", error);
      res.status(500).json({ error: "Failed to deactivate user" });
    }
  });
  app2.put("/api/users/:id/status", requireRole(["admin"]), async (req, res) => {
    try {
      const { id } = req.params;
      const { isActive } = req.body;
      await storage.updateUser(id, { isActive });
      res.json({ message: `User ${isActive ? "activated" : "deactivated"} successfully` });
    } catch (error) {
      console.error("Error updating user status:", error);
      res.status(500).json({ error: "Failed to update user status" });
    }
  });
  app2.put("/api/users/:id/password", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { currentPassword, newPassword } = req.body;
      const currentUserId = req.session.userId;
      if (id !== currentUserId) {
        const currentUser = await storage.getUser(currentUserId);
        if (!currentUser || currentUser.role !== "admin") {
          return res.status(403).json({ message: "Insufficient permissions" });
        }
      }
      if (id === currentUserId && currentPassword) {
        const user = await storage.getUser(id);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        const { AuthService: AuthService3 } = await Promise.resolve().then(() => (init_auth(), auth_exports));
        const isValidPassword = await AuthService3.verifyPassword(currentPassword, user.password);
        if (!isValidPassword) {
          return res.status(400).json({ message: "Current password is incorrect" });
        }
      }
      const { AuthService: AuthService2 } = await Promise.resolve().then(() => (init_auth(), auth_exports));
      const hashedPassword = await AuthService2.hashPassword(newPassword);
      await storage.updateUser(id, { password: hashedPassword });
      res.json({ message: "Password updated successfully" });
    } catch (error) {
      console.error("Error updating password:", error);
      res.status(500).json({ error: "Failed to update password" });
    }
  });
}

// server/services/upload.ts
var import_multer = __toESM(require("multer"), 1);
var import_path = __toESM(require("path"), 1);
var import_crypto3 = require("crypto");
var import_promises = __toESM(require("fs/promises"), 1);
var storage2 = import_multer.default.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = process.env.STORAGE_PATH || "server/public/uploads";
    try {
      await import_promises.default.mkdir(uploadDir, { recursive: true });
      cb(null, uploadDir);
    } catch (error) {
      cb(error, uploadDir);
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${(0, import_crypto3.randomUUID)()}`;
    const ext = import_path.default.extname(file.originalname);
    const baseName = import_path.default.basename(file.originalname, ext);
    const sanitizedName = baseName.replace(/[^a-zA-Z0-9]/g, "_");
    cb(null, `${sanitizedName}-${uniqueSuffix}${ext}`);
  }
});
var fileFilter = (req, file, cb) => {
  const allowedTypes = {
    image: ["image/jpeg", "image/png", "image/gif", "image/webp"],
    document: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
    video: ["video/mp4", "video/webm", "video/ogg"],
    audio: ["audio/mpeg", "audio/wav", "audio/ogg"]
  };
  const allAllowedTypes = [
    ...allowedTypes.image,
    ...allowedTypes.document,
    ...allowedTypes.video,
    ...allowedTypes.audio
  ];
  if (allAllowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`Type de fichier non autoris\xE9: ${file.mimetype}`));
  }
};
var upload = (0, import_multer.default)({
  storage: storage2,
  fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024,
    // 50MB max
    files: 5
    // Maximum 5 fichiers par upload
  }
});
var FileManager = class {
  static async deleteFile(filePath) {
    try {
      await import_promises.default.unlink(filePath);
    } catch (error) {
      console.error("Erreur lors de la suppression du fichier:", error);
    }
  }
  static async getFileInfo(filePath) {
    try {
      const stats = await import_promises.default.stat(filePath);
      return { size: stats.size, exists: true };
    } catch (error) {
      return { size: 0, exists: false };
    }
  }
  static getFileUrl(filename) {
    return `/uploads/${filename}`;
  }
  static getFileType(mimetype) {
    if (mimetype.startsWith("image/")) return "image";
    if (mimetype.startsWith("video/")) return "video";
    if (mimetype.startsWith("audio/")) return "audio";
    if (mimetype.includes("pdf") || mimetype.includes("document") || mimetype.includes("word")) return "document";
    return "other";
  }
  static formatFileSize(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
};
var handleUpload = (fieldName, multiple = false) => {
  return multiple ? upload.array(fieldName, 5) : upload.single(fieldName);
};
var handleMultipleUploads = upload.fields([
  { name: "documents", maxCount: 5 },
  { name: "images", maxCount: 10 },
  { name: "avatar", maxCount: 1 }
]);
function processUploadedFile(file, userId) {
  return {
    id: (0, import_crypto3.randomUUID)(),
    originalName: file.originalname,
    fileName: file.filename,
    filePath: file.path,
    fileUrl: FileManager.getFileUrl(file.filename),
    mimeType: file.mimetype,
    fileType: FileManager.getFileType(file.mimetype),
    size: file.size,
    formattedSize: FileManager.formatFileSize(file.size),
    uploadedAt: /* @__PURE__ */ new Date(),
    uploadedBy: userId
  };
}

// server/services/websocket.ts
var import_ws = require("ws");
var WebSocketManager = class {
  wss;
  clients = /* @__PURE__ */ new Map();
  channels = /* @__PURE__ */ new Map();
  heartbeatInterval;
  constructor(server) {
    this.wss = new import_ws.WebSocketServer({
      server,
      path: "/ws"
    });
    this.wss.on("connection", this.handleConnection.bind(this));
    this.heartbeatInterval = setInterval(this.heartbeat.bind(this), 3e4);
  }
  handleConnection(ws) {
    const clientId = this.generateClientId();
    this.clients.set(clientId, ws);
    ws.channels = /* @__PURE__ */ new Set();
    ws.lastHeartbeat = Date.now();
    ws.on("message", (data) => {
      try {
        const message = JSON.parse(data);
        this.handleMessage(clientId, ws, message);
      } catch (error) {
        console.error("WebSocket message parse error:", error);
      }
    });
    ws.on("close", () => {
      this.handleDisconnect(clientId, ws);
    });
    ws.on("pong", () => {
      ws.lastHeartbeat = Date.now();
    });
    this.sendToClient(clientId, {
      type: "CONNECTED",
      payload: { clientId, timestamp: Date.now() }
    });
  }
  handleMessage(clientId, ws, message) {
    switch (message.type) {
      case "AUTHENTICATE":
        this.authenticateClient(clientId, ws, message.payload?.userId);
        break;
      case "JOIN_CHANNEL":
        this.joinChannel(clientId, ws, message.payload?.channel);
        break;
      case "LEAVE_CHANNEL":
        this.leaveChannel(clientId, ws, message.payload?.channel);
        break;
      case "HEARTBEAT":
        ws.lastHeartbeat = Date.now();
        this.sendToClient(clientId, { type: "HEARTBEAT_ACK" });
        break;
      case "TYPING_START":
        this.broadcastToChannel(message.payload?.channel, {
          type: "USER_TYPING",
          payload: { userId: ws.userId, isTyping: true }
        }, clientId);
        break;
      case "TYPING_STOP":
        this.broadcastToChannel(message.payload?.channel, {
          type: "USER_TYPING",
          payload: { userId: ws.userId, isTyping: false }
        }, clientId);
        break;
    }
  }
  authenticateClient(clientId, ws, userId) {
    if (!userId) return;
    ws.userId = userId;
    this.joinChannel(clientId, ws, `user_${userId}`);
    this.broadcastUserStatus(userId, true);
    this.sendToClient(clientId, {
      type: "AUTHENTICATED",
      payload: { userId, timestamp: Date.now() }
    });
  }
  joinChannel(clientId, ws, channel) {
    if (!channel || !ws.channels) return;
    ws.channels.add(channel);
    if (!this.channels.has(channel)) {
      this.channels.set(channel, /* @__PURE__ */ new Set());
    }
    this.channels.get(channel).add(clientId);
    this.sendToClient(clientId, {
      type: "CHANNEL_JOINED",
      payload: { channel, timestamp: Date.now() }
    });
  }
  leaveChannel(clientId, ws, channel) {
    if (!channel || !ws.channels) return;
    ws.channels.delete(channel);
    this.channels.get(channel)?.delete(clientId);
    if (this.channels.get(channel)?.size === 0) {
      this.channels.delete(channel);
    }
    this.sendToClient(clientId, {
      type: "CHANNEL_LEFT",
      payload: { channel, timestamp: Date.now() }
    });
  }
  handleDisconnect(clientId, ws) {
    if (ws.channels) {
      ws.channels.forEach((channel) => {
        this.channels.get(channel)?.delete(clientId);
        if (this.channels.get(channel)?.size === 0) {
          this.channels.delete(channel);
        }
      });
    }
    if (ws.userId) {
      this.broadcastUserStatus(ws.userId, false);
    }
    this.clients.delete(clientId);
  }
  heartbeat() {
    const now = Date.now();
    this.clients.forEach((ws, clientId) => {
      if (ws.lastHeartbeat && now - ws.lastHeartbeat > 35e3) {
        ws.terminate();
        this.clients.delete(clientId);
      } else {
        ws.ping();
      }
    });
  }
  generateClientId() {
    return Math.random().toString(36).substr(2, 9);
  }
  sendToClient(clientId, message) {
    const client = this.clients.get(clientId);
    if (client && client.readyState === import_ws.WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  }
  broadcastToChannel(channel, message, excludeClientId) {
    const channelClients = this.channels.get(channel);
    if (!channelClients) return;
    channelClients.forEach((clientId) => {
      if (clientId !== excludeClientId) {
        this.sendToClient(clientId, message);
      }
    });
  }
  broadcastUserStatus(userId, isOnline) {
    this.broadcast({
      type: "USER_STATUS",
      payload: { userId, isOnline, timestamp: Date.now() }
    });
  }
  // Public methods for broadcasting events
  broadcast(message) {
    this.clients.forEach((_, clientId) => {
      this.sendToClient(clientId, message);
    });
  }
  broadcastToUsers(userIds, message) {
    userIds.forEach((userId) => {
      this.broadcastToChannel(`user_${userId}`, message);
    });
  }
  broadcastNewAnnouncement(announcement) {
    this.broadcast({
      type: "NEW_ANNOUNCEMENT",
      payload: announcement
    });
  }
  broadcastNewMessage(message) {
    this.broadcastToChannel(`user_${message.recipientId}`, {
      type: "NEW_MESSAGE",
      payload: message
    });
  }
  broadcastForumUpdate(update) {
    this.broadcast({
      type: "FORUM_UPDATE",
      payload: update
    });
  }
  broadcastTrainingUpdate(update) {
    this.broadcast({
      type: "TRAINING_UPDATE",
      payload: update
    });
  }
  broadcastComplaintUpdate(complaint) {
    this.broadcast({
      type: "COMPLAINT_UPDATE",
      payload: complaint
    });
  }
  getConnectedUsers() {
    const users3 = [];
    this.clients.forEach((client) => {
      if (client.userId) {
        users3.push(client.userId);
      }
    });
    return [...new Set(users3)];
  }
  getConnectedUserCount() {
    return this.getConnectedUsers().length;
  }
  isUserOnline(userId) {
    return this.getConnectedUsers().includes(userId);
  }
  close() {
    clearInterval(this.heartbeatInterval);
    this.wss.close();
  }
};
var wsManager;
function initializeWebSocket(server) {
  wsManager = new WebSocketManager(server);
  console.log("WebSocket server initialized on /ws");
  return wsManager;
}

// server/routes/content.ts
var requireAuth2 = (req, res, next) => {
  if (!req.session?.userId) {
    return res.status(401).json({ message: "Authentication required" });
  }
  next();
};
var requireRole2 = (roles) => {
  return async (req, res, next) => {
    if (!req.session?.userId) {
      return res.status(401).json({ message: "Authentication required" });
    }
    const user = await storage.getUser(req.session.userId);
    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }
    req.user = user;
    next();
  };
};
function registerContentRoutes(app2) {
  app2.get("/api/announcements", async (_req, res) => {
    try {
      const announcements3 = await storage.getAnnouncements();
      res.json(announcements3);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch announcements" });
    }
  });
  app2.get("/api/announcements/:id", async (req, res) => {
    try {
      const announcement = await storage.getAnnouncementById(req.params.id);
      if (!announcement) {
        return res.status(404).json({ message: "Announcement not found" });
      }
      res.json(announcement);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch announcement" });
    }
  });
  app2.post("/api/announcements", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const result = insertAnnouncementSchema2.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid announcement data", errors: result.error.issues });
      }
      const announcement = await storage.createAnnouncement(result.data);
      res.status(201).json(announcement);
    } catch (error) {
      res.status(500).json({ message: "Failed to create announcement" });
    }
  });
  app2.put("/api/announcements/:id", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const { id } = req.params;
      const result = insertAnnouncementSchema2.partial().safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid announcement data", errors: result.error.issues });
      }
      const announcement = await storage.updateAnnouncement(id, result.data);
      res.json(announcement);
    } catch (error) {
      res.status(500).json({ message: "Failed to update announcement" });
    }
  });
  app2.delete("/api/announcements/:id", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteAnnouncement(id);
      res.json({ message: "Announcement deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete announcement" });
    }
  });
  app2.get("/api/documents", async (_req, res) => {
    try {
      const documents3 = await storage.getDocuments();
      res.json(documents3);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch documents" });
    }
  });
  app2.get("/api/documents/:id", async (req, res) => {
    try {
      const document = await storage.getDocumentById(req.params.id);
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }
      res.json(document);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch document" });
    }
  });
  app2.post("/api/documents", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const result = insertDocumentSchema2.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid document data", errors: result.error.issues });
      }
      const document = await storage.createDocument(result.data);
      res.status(201).json(document);
    } catch (error) {
      res.status(500).json({ message: "Failed to create document" });
    }
  });
  app2.patch("/api/documents/:id", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const { id } = req.params;
      const updatedDocument = await storage.updateDocument(id, req.body);
      res.json(updatedDocument);
    } catch (error) {
      console.error("Error updating document:", error);
      res.status(500).json({ error: "Failed to update document" });
    }
  });
  app2.delete("/api/documents/:id", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteDocument(id);
      res.json({ message: "Document deleted successfully" });
    } catch (error) {
      console.error("Error deleting document:", error);
      res.status(500).json({ error: "Failed to delete document" });
    }
  });
  app2.get("/api/events", async (_req, res) => {
    try {
      const events3 = await storage.getEvents();
      res.json(events3);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });
  app2.get("/api/events/:id", async (req, res) => {
    try {
      const event = await storage.getEventById(req.params.id);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch event" });
    }
  });
  app2.post("/api/events", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const result = insertEventSchema2.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid event data", errors: result.error.issues });
      }
      const event = await storage.createEvent(result.data);
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ message: "Failed to create event" });
    }
  });
  app2.put("/api/events/:id", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const { id } = req.params;
      const result = insertEventSchema2.partial().safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid event data", errors: result.error.issues });
      }
      const event = await storage.updateEvent(id, result.data);
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: "Failed to update event" });
    }
  });
  app2.delete("/api/events/:id", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteEvent(id);
      res.json({ message: "Event deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete event" });
    }
  });
  app2.get("/api/contents", async (req, res) => {
    try {
      const contents2 = await storage.getContents();
      res.json(contents2);
    } catch (error) {
      console.error("Error fetching contents:", error);
      res.status(500).json({ error: "Failed to fetch contents" });
    }
  });
  app2.post("/api/contents", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const result = insertContentSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid content data", errors: result.error.issues });
      }
      const content = await storage.createContent(result.data);
      res.status(201).json(content);
    } catch (error) {
      console.error("Error creating content:", error);
      res.status(500).json({ error: "Failed to create content" });
    }
  });
  app2.patch("/api/contents/:id", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const { id } = req.params;
      const updatedContent = await storage.updateContent(id, req.body);
      res.json(updatedContent);
    } catch (error) {
      console.error("Error updating content:", error);
      res.status(500).json({ error: "Failed to update content" });
    }
  });
  app2.delete("/api/contents/:id", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteContent(id);
      res.json({ message: "Content deleted successfully" });
    } catch (error) {
      console.error("Error deleting content:", error);
      res.status(500).json({ error: "Failed to delete content" });
    }
  });
  app2.get("/api/categories", async (req, res) => {
    try {
      const categories2 = await storage.getCategories();
      res.json(categories2);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });
  app2.post("/api/categories", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const result = insertCategorySchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid category data", errors: result.error.issues });
      }
      const category = await storage.createCategory(result.data);
      res.status(201).json(category);
    } catch (error) {
      console.error("Error creating category:", error);
      res.status(500).json({ error: "Failed to create category" });
    }
  });
  app2.patch("/api/categories/:id", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const { id } = req.params;
      const updatedCategory = await storage.updateCategory(id, req.body);
      res.json(updatedCategory);
    } catch (error) {
      console.error("Error updating category:", error);
      res.status(500).json({ error: "Failed to update category" });
    }
  });
  app2.delete("/api/categories/:id", requireRole2(["admin", "moderator"]), async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteCategory(id);
      res.json({ message: "Category deleted successfully" });
    } catch (error) {
      console.error("Error deleting category:", error);
      res.status(500).json({ error: "Failed to delete category" });
    }
  });
  app2.post("/api/upload", requireAuth2, handleUpload("file"), async (req, res) => {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).json({ message: "Aucun fichier fourni" });
      }
      const userId = req.session.userId;
      const uploadedFile = processUploadedFile(file, userId);
      res.status(201).json({
        message: "Fichier upload\xE9 avec succ\xE8s",
        file: uploadedFile
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).json({ message: "Erreur lors de l'upload" });
    }
  });
  app2.post("/api/upload/avatar", requireAuth2, handleUpload("avatar"), async (req, res) => {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).json({ message: "Aucune image fournie" });
      }
      if (!file.mimetype.startsWith("image/")) {
        await FileManager.deleteFile(file.path);
        return res.status(400).json({ message: "Le fichier doit \xEAtre une image" });
      }
      const userId = req.session.userId;
      const uploadedFile = processUploadedFile(file, userId);
      await storage.updateUser(userId, { avatar: uploadedFile.fileUrl });
      if (wsManager) {
        wsManager.broadcast({
          type: "USER_AVATAR_UPDATE",
          payload: { userId, avatarUrl: uploadedFile.fileUrl }
        });
      }
      res.status(201).json({
        message: "Avatar mis \xE0 jour avec succ\xE8s",
        file: uploadedFile,
        avatarUrl: uploadedFile.fileUrl
      });
    } catch (error) {
      console.error("Error uploading avatar:", error);
      res.status(500).json({ message: "Erreur lors de l'upload de l'avatar" });
    }
  });
  app2.post("/api/upload/document", requireRole2(["admin", "moderator"]), handleUpload("document"), async (req, res) => {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).json({ message: "Aucun document fourni" });
      }
      const { title, description, category } = req.body;
      if (!title || !category) {
        await FileManager.deleteFile(file.path);
        return res.status(400).json({ message: "Titre et cat\xE9gorie requis" });
      }
      const userId = req.session.userId;
      const uploadedFile = processUploadedFile(file, userId);
      const document = await storage.createDocument({
        title,
        description: description || "",
        category,
        fileName: uploadedFile.originalName,
        fileUrl: uploadedFile.fileUrl,
        version: "1.0"
      });
      if (wsManager) {
        wsManager.broadcast({
          type: "NEW_DOCUMENT",
          payload: document
        });
      }
      res.status(201).json({
        message: "Document upload\xE9 avec succ\xE8s",
        document,
        file: uploadedFile
      });
    } catch (error) {
      console.error("Error uploading document:", error);
      if (req.file) {
        await FileManager.deleteFile(req.file.path);
      }
      res.status(500).json({ message: "Erreur lors de l'upload du document" });
    }
  });
  app2.get("/api/files/:filename", async (req, res) => {
    try {
      const { filename } = req.params;
      const filePath = `server/public/uploads/${filename}`;
      const fileInfo = await FileManager.getFileInfo(filePath);
      if (!fileInfo.exists) {
        return res.status(404).json({ message: "Fichier non trouv\xE9" });
      }
      res.json({
        filename,
        size: fileInfo.size,
        formattedSize: FileManager.formatFileSize(fileInfo.size),
        exists: fileInfo.exists
      });
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la r\xE9cup\xE9ration des infos du fichier" });
    }
  });
  app2.delete("/api/files/:filename", requireAuth2, async (req, res) => {
    try {
      const { filename } = req.params;
      const filePath = `server/public/uploads/${filename}`;
      await FileManager.deleteFile(filePath);
      res.json({
        message: "Fichier supprim\xE9 avec succ\xE8s",
        filename
      });
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la suppression du fichier" });
    }
  });
}

// server/routes/messaging.ts
var requireAuth3 = (req, res, next) => {
  if (!req.session?.userId) {
    return res.status(401).json({ message: "Authentication required" });
  }
  next();
};
var requireRole3 = (roles) => {
  return async (req, res, next) => {
    if (!req.session?.userId) {
      return res.status(401).json({ message: "Authentication required" });
    }
    const user = await storage.getUser(req.session.userId);
    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }
    req.user = user;
    next();
  };
};
function registerMessagingRoutes(app2) {
  app2.get("/api/messages", requireAuth3, async (req, res) => {
    try {
      const userId = req.session.userId;
      const messages3 = await storage.getMessages(userId);
      res.json(messages3);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });
  app2.get("/api/messages/sent", requireAuth3, async (req, res) => {
    try {
      const userId = req.session.userId;
      const allMessages = await storage.getMessages(userId);
      const sentMessages = allMessages.filter((msg) => msg.senderId === userId);
      res.json(sentMessages);
    } catch (error) {
      console.error("Error fetching sent messages:", error);
      res.status(500).json({ error: "Failed to fetch sent messages" });
    }
  });
  app2.get("/api/messages/:id", requireAuth3, async (req, res) => {
    try {
      const message = await storage.getMessageById(req.params.id);
      if (!message) {
        return res.status(404).json({ message: "Message not found" });
      }
      const userId = req.session.userId;
      if (message.senderId !== userId && message.recipientId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      res.json(message);
    } catch (error) {
      console.error("Error fetching message:", error);
      res.status(500).json({ error: "Failed to fetch message" });
    }
  });
  app2.post("/api/messages", requireAuth3, async (req, res) => {
    try {
      const result = insertMessageSchema2.safeParse({
        ...req.body,
        senderId: req.session.userId
      });
      if (!result.success) {
        return res.status(400).json({ message: "Invalid message data", errors: result.error.issues });
      }
      const message = await storage.createMessage(result.data);
      res.status(201).json(message);
    } catch (error) {
      console.error("Error creating message:", error);
      res.status(500).json({ error: "Failed to create message" });
    }
  });
  app2.put("/api/messages/:id/read", requireAuth3, async (req, res) => {
    try {
      const { id } = req.params;
      const message = await storage.getMessageById(id);
      if (!message) {
        return res.status(404).json({ message: "Message not found" });
      }
      if (message.recipientId !== req.session.userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      await storage.markMessageAsRead(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error marking message as read:", error);
      res.status(500).json({ error: "Failed to mark message as read" });
    }
  });
  app2.delete("/api/messages/:id", requireAuth3, async (req, res) => {
    try {
      const { id } = req.params;
      const message = await storage.getMessageById(id);
      if (!message) {
        return res.status(404).json({ message: "Message not found" });
      }
      if (message.senderId !== req.session.userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      await storage.deleteMessage(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting message:", error);
      res.status(500).json({ error: "Failed to delete message" });
    }
  });
  app2.get("/api/forum/categories", async (req, res) => {
    try {
      const categories2 = await storage.getForumCategories();
      res.json(categories2);
    } catch (error) {
      console.error("Error fetching forum categories:", error);
      res.status(500).json({ error: "Failed to fetch forum categories" });
    }
  });
  app2.get("/api/forum/categories/:id", async (req, res) => {
    try {
      const category = await storage.getForumCategoryById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      console.error("Error fetching forum category:", error);
      res.status(500).json({ error: "Failed to fetch forum category" });
    }
  });
  app2.post("/api/forum/categories", requireRole3(["admin", "moderator"]), async (req, res) => {
    try {
      const result = insertForumCategorySchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid category data", errors: result.error.issues });
      }
      const category = await storage.createForumCategory(result.data);
      res.status(201).json(category);
    } catch (error) {
      console.error("Error creating forum category:", error);
      res.status(500).json({ error: "Failed to create forum category" });
    }
  });
  app2.get("/api/forum/topics", async (req, res) => {
    try {
      const { categoryId } = req.query;
      const topics = await storage.getForumTopics(categoryId);
      res.json(topics);
    } catch (error) {
      console.error("Error fetching forum topics:", error);
      res.status(500).json({ error: "Failed to fetch forum topics" });
    }
  });
  app2.get("/api/forum/topics/:id", async (req, res) => {
    try {
      const topic = await storage.getForumTopicById(req.params.id);
      if (!topic) {
        return res.status(404).json({ message: "Topic not found" });
      }
      res.json(topic);
    } catch (error) {
      console.error("Error fetching forum topic:", error);
      res.status(500).json({ error: "Failed to fetch forum topic" });
    }
  });
  app2.get("/api/forum/topics/:id/posts", async (req, res) => {
    try {
      const posts = await storage.getForumPosts(req.params.id);
      res.json(posts);
    } catch (error) {
      console.error("Error fetching forum posts:", error);
      res.status(500).json({ error: "Failed to fetch forum posts" });
    }
  });
  app2.post("/api/forum/topics", requireAuth3, async (req, res) => {
    try {
      const user = await storage.getUser(req.session.userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      const result = insertForumTopicSchema.safeParse({
        ...req.body,
        authorId: user.id,
        authorName: user.name
      });
      if (!result.success) {
        return res.status(400).json({ message: "Invalid topic data", errors: result.error.issues });
      }
      const topic = await storage.createForumTopic(result.data);
      res.status(201).json(topic);
    } catch (error) {
      console.error("Error creating forum topic:", error);
      res.status(500).json({ error: "Failed to create forum topic" });
    }
  });
  app2.post("/api/forum/posts", requireAuth3, async (req, res) => {
    try {
      const user = await storage.getUser(req.session.userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      const result = insertForumPostSchema.safeParse({
        ...req.body,
        authorId: user.id,
        authorName: user.name
      });
      if (!result.success) {
        return res.status(400).json({ message: "Invalid post data", errors: result.error.issues });
      }
      const post = await storage.createForumPost(result.data);
      await storage.updateForumTopicActivity(result.data.topicId);
      res.status(201).json(post);
    } catch (error) {
      console.error("Error creating forum post:", error);
      res.status(500).json({ error: "Failed to create forum post" });
    }
  });
  app2.put("/api/forum/posts/:id", requireAuth3, async (req, res) => {
    try {
      const post = await storage.getForumPostById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      const user = await storage.getUser(req.session.userId);
      if (!user || post.authorId !== user.id && user.role !== "admin" && user.role !== "moderator") {
        return res.status(403).json({ message: "Access denied" });
      }
      const updatedPost = await storage.updateForumPost(req.params.id, {
        content: req.body.content,
        isEdited: true
      });
      res.json(updatedPost);
    } catch (error) {
      console.error("Error updating forum post:", error);
      res.status(500).json({ error: "Failed to update forum post" });
    }
  });
  app2.delete("/api/forum/posts/:id", requireAuth3, async (req, res) => {
    try {
      const post = await storage.getForumPostById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      const user = await storage.getUser(req.session.userId);
      if (!user || post.authorId !== user.id && user.role !== "admin" && user.role !== "moderator") {
        return res.status(403).json({ message: "Access denied" });
      }
      await storage.deleteForumPost(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting forum post:", error);
      res.status(500).json({ error: "Failed to delete forum post" });
    }
  });
  app2.post("/api/forum/posts/:id/like", requireAuth3, async (req, res) => {
    try {
      const { id: postId } = req.params;
      const userId = req.session.userId;
      const post = await storage.getForumPostById(postId);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      const existingLike = await storage.getForumLike(postId, userId);
      if (existingLike) {
        await storage.deleteForumLike(postId, userId);
        res.json({ liked: false, message: "Like removed" });
      } else {
        await storage.createForumLike({
          postId,
          userId,
          reactionType: req.body.reactionType || "like"
        });
        res.json({ liked: true, message: "Post liked" });
      }
    } catch (error) {
      console.error("Error handling forum like:", error);
      res.status(500).json({ error: "Failed to handle like" });
    }
  });
  app2.delete("/api/messages/:id", requireAuth3, async (req, res) => {
    try {
      const { id } = req.params;
      const message = await storage.getMessageById(id);
      if (!message) {
        return res.status(404).json({ message: "Message not found" });
      }
      const userId = req.session.userId;
      if (message.senderId !== userId && message.recipientId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      await storage.deleteMessage(id);
      res.json({ message: "Message deleted successfully" });
    } catch (error) {
      console.error("Error deleting message:", error);
      res.status(500).json({ error: "Failed to delete message" });
    }
  });
  app2.get("/api/complaints", requireAuth3, async (req, res) => {
    try {
      const userId = req.session.userId;
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      let complaints3;
      if (user.role === "admin" || user.role === "moderator") {
        complaints3 = await storage.getComplaints();
      } else {
        complaints3 = await storage.getComplaintsByUser(userId);
      }
      res.json(complaints3);
    } catch (error) {
      console.error("Error fetching complaints:", error);
      res.status(500).json({ error: "Failed to fetch complaints" });
    }
  });
  app2.get("/api/complaints/:id", requireAuth3, async (req, res) => {
    try {
      const complaint = await storage.getComplaintById(req.params.id);
      if (!complaint) {
        return res.status(404).json({ message: "Complaint not found" });
      }
      const userId = req.session.userId;
      const user = await storage.getUser(userId);
      if (user?.role !== "admin" && user?.role !== "moderator" && complaint.submitterId !== userId) {
        return res.status(403).json({ message: "Access denied" });
      }
      res.json(complaint);
    } catch (error) {
      console.error("Error fetching complaint:", error);
      res.status(500).json({ error: "Failed to fetch complaint" });
    }
  });
  app2.post("/api/complaints", requireAuth3, async (req, res) => {
    try {
      const result = insertComplaintSchema2.safeParse({
        ...req.body,
        submitterId: req.session.userId
      });
      if (!result.success) {
        return res.status(400).json({ message: "Invalid complaint data", errors: result.error.issues });
      }
      const complaint = await storage.createComplaint(result.data);
      res.status(201).json(complaint);
    } catch (error) {
      console.error("Error creating complaint:", error);
      res.status(500).json({ error: "Failed to create complaint" });
    }
  });
  app2.patch("/api/complaints/:id", requireRole3(["admin", "moderator"]), async (req, res) => {
    try {
      const { id } = req.params;
      const updatedComplaint = await storage.updateComplaint(id, req.body);
      res.json(updatedComplaint);
    } catch (error) {
      console.error("Error updating complaint:", error);
      res.status(500).json({ error: "Failed to update complaint" });
    }
  });
  app2.put("/api/complaints/:id/assign", requireRole3(["admin", "moderator"]), async (req, res) => {
    try {
      const { id } = req.params;
      const { assignedToId } = req.body;
      const updatedComplaint = await storage.updateComplaint(id, { assignedToId });
      res.json(updatedComplaint);
    } catch (error) {
      console.error("Error assigning complaint:", error);
      res.status(500).json({ error: "Failed to assign complaint" });
    }
  });
  app2.put("/api/complaints/:id/status", requireRole3(["admin", "moderator"]), async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const updatedComplaint = await storage.updateComplaint(id, {
        status,
        updatedAt: /* @__PURE__ */ new Date()
      });
      res.json(updatedComplaint);
    } catch (error) {
      console.error("Error updating complaint status:", error);
      res.status(500).json({ error: "Failed to update complaint status" });
    }
  });
  app2.delete("/api/complaints/:id", requireRole3(["admin"]), async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteComplaint(id);
      res.json({ message: "Complaint deleted successfully" });
    } catch (error) {
      console.error("Error deleting complaint:", error);
      res.status(500).json({ error: "Failed to delete complaint" });
    }
  });
  app2.get("/api/forum/categories", async (req, res) => {
    try {
      const categories2 = await storage.getForumCategories();
      res.json(categories2);
    } catch (error) {
      console.error("Error fetching forum categories:", error);
      res.status(500).json({ error: "Failed to fetch forum categories" });
    }
  });
  app2.post("/api/forum/categories", requireRole3(["admin", "moderator"]), async (req, res) => {
    try {
      const result = insertForumCategorySchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid category data", errors: result.error.issues });
      }
      const category = await storage.createForumCategory(result.data);
      res.status(201).json(category);
    } catch (error) {
      console.error("Error creating forum category:", error);
      res.status(500).json({ error: "Failed to create forum category" });
    }
  });
  app2.get("/api/forum/topics", async (req, res) => {
    try {
      const { categoryId } = req.query;
      const topics = await storage.getForumTopics(categoryId);
      res.json(topics);
    } catch (error) {
      console.error("Error fetching forum topics:", error);
      res.status(500).json({ error: "Failed to fetch forum topics" });
    }
  });
  app2.get("/api/forum/topics/:id", async (req, res) => {
    try {
      const topic = await storage.getForumTopicById(req.params.id);
      if (!topic) {
        return res.status(404).json({ error: "Topic not found" });
      }
      res.json(topic);
    } catch (error) {
      console.error("Error fetching forum topic:", error);
      res.status(500).json({ error: "Failed to fetch forum topic" });
    }
  });
  app2.post("/api/forum/topics", requireAuth3, async (req, res) => {
    try {
      const user = await storage.getUser(req.session.userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      const result = insertForumTopicSchema.safeParse({
        ...req.body,
        authorId: user.id,
        authorName: user.name
      });
      if (!result.success) {
        return res.status(400).json({ message: "Invalid topic data", errors: result.error.issues });
      }
      const topic = await storage.createForumTopic(result.data);
      res.status(201).json(topic);
    } catch (error) {
      console.error("Error creating forum topic:", error);
      res.status(500).json({ error: "Failed to create forum topic" });
    }
  });
  app2.get("/api/forum/topics/:id/posts", async (req, res) => {
    try {
      const posts = await storage.getForumPosts(req.params.id);
      res.json(posts);
    } catch (error) {
      console.error("Error fetching forum posts:", error);
      res.status(500).json({ error: "Failed to fetch forum posts" });
    }
  });
  app2.post("/api/forum/posts", requireAuth3, async (req, res) => {
    try {
      const user = await storage.getUser(req.session.userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      const result = insertForumPostSchema.safeParse({
        ...req.body,
        authorId: user.id,
        authorName: user.name
      });
      if (!result.success) {
        return res.status(400).json({ message: "Invalid post data", errors: result.error.issues });
      }
      const post = await storage.createForumPost(result.data);
      res.status(201).json(post);
    } catch (error) {
      console.error("Error creating forum post:", error);
      res.status(500).json({ error: "Failed to create forum post" });
    }
  });
  app2.post("/api/forum/posts/:id/like", requireAuth3, async (req, res) => {
    try {
      const userId = req.session.userId;
      const postId = req.params.id;
      const result = insertForumLikeSchema.safeParse({
        postId,
        userId
      });
      if (!result.success) {
        return res.status(400).json({ message: "Invalid like data", errors: result.error.issues });
      }
      const like = await storage.createForumLike(result.data);
      res.status(201).json(like);
    } catch (error) {
      console.error("Error liking forum post:", error);
      res.status(500).json({ error: "Failed to like forum post" });
    }
  });
}

// server/routes/training.ts
var requireAuth4 = (req, res, next) => {
  if (!req.session?.userId) {
    return res.status(401).json({ message: "Authentication required" });
  }
  next();
};
var requireRole4 = (roles) => {
  return async (req, res, next) => {
    if (!req.session?.userId) {
      return res.status(401).json({ message: "Authentication required" });
    }
    const user = await storage.getUser(req.session.userId);
    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }
    req.user = user;
    next();
  };
};
function registerTrainingRoutes(app2) {
  app2.get("/api/trainings", async (req, res) => {
    try {
      const trainings3 = await storage.getTrainings();
      res.json(trainings3);
    } catch (error) {
      console.error("Error fetching trainings:", error);
      res.status(500).json({ error: "Failed to fetch trainings" });
    }
  });
  app2.get("/api/trainings/:id", async (req, res) => {
    try {
      const training = await storage.getTrainingById(req.params.id);
      if (!training) {
        return res.status(404).json({ error: "Training not found" });
      }
      res.json(training);
    } catch (error) {
      console.error("Error fetching training:", error);
      res.status(500).json({ error: "Failed to fetch training" });
    }
  });
  app2.post("/api/trainings", requireAuth4, async (req, res) => {
    try {
      const user = await storage.getUser(req.session.userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      const hasPermission = await storage.hasPermission(user.id, "manage_trainings") || user.role === "admin";
      if (!hasPermission) {
        return res.status(403).json({ message: "Insufficient permissions to create trainings" });
      }
      const result = insertTrainingSchema2.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid training data", errors: result.error.issues });
      }
      const training = await storage.createTraining(result.data);
      res.status(201).json(training);
    } catch (error) {
      console.error("Error creating training:", error);
      res.status(500).json({ error: "Failed to create training" });
    }
  });
  app2.put("/api/trainings/:id", requireAuth4, async (req, res) => {
    try {
      const user = await storage.getUser(req.session.userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      const hasPermission = await storage.hasPermission(user.id, "manage_trainings") || user.role === "admin";
      if (!hasPermission) {
        return res.status(403).json({ message: "Insufficient permissions to update trainings" });
      }
      const result = insertTrainingSchema2.partial().safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid training data", errors: result.error.issues });
      }
      const training = await storage.updateTraining(req.params.id, result.data);
      res.json(training);
    } catch (error) {
      console.error("Error updating training:", error);
      if (error.message === "Training not found") {
        return res.status(404).json({ error: "Training not found" });
      }
      res.status(500).json({ error: "Failed to update training" });
    }
  });
  app2.delete("/api/trainings/:id", requireAuth4, async (req, res) => {
    try {
      const user = await storage.getUser(req.session.userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      const hasPermission = await storage.hasPermission(user.id, "manage_trainings") || user.role === "admin";
      if (!hasPermission) {
        return res.status(403).json({ message: "Insufficient permissions to delete trainings" });
      }
      await storage.deleteTraining(req.params.id);
      res.json({ message: "Training deleted successfully" });
    } catch (error) {
      console.error("Error deleting training:", error);
      res.status(500).json({ error: "Failed to delete training" });
    }
  });
  app2.get("/api/trainings/:id/participants", async (req, res) => {
    try {
      const participants = await storage.getTrainingParticipants(req.params.id);
      res.json(participants);
    } catch (error) {
      console.error("Error fetching training participants:", error);
      res.status(500).json({ error: "Failed to fetch training participants" });
    }
  });
  app2.post("/api/trainings/:id/participants", requireAuth4, async (req, res) => {
    try {
      const userId = req.session.userId;
      const trainingId = req.params.id;
      const participant = await storage.addTrainingParticipant({
        trainingId,
        userId,
        status: "registered"
      });
      res.status(201).json(participant);
    } catch (error) {
      console.error("Error adding training participant:", error);
      res.status(500).json({ error: "Failed to register for training" });
    }
  });
  app2.delete("/api/trainings/:id/participants/:userId", requireAuth4, async (req, res) => {
    try {
      const currentUserId = req.session.userId;
      const { id: trainingId, userId } = req.params;
      if (currentUserId !== userId) {
        const user = await storage.getUser(currentUserId);
        if (!user) {
          return res.status(401).json({ message: "User not found" });
        }
        const hasPermission = await storage.hasPermission(user.id, "manage_trainings") || user.role === "admin";
        if (!hasPermission) {
          return res.status(403).json({ message: "Insufficient permissions to remove participant" });
        }
      }
      await storage.removeTrainingParticipant(trainingId, userId);
      res.json({ message: "Participant removed successfully" });
    } catch (error) {
      console.error("Error removing training participant:", error);
      res.status(500).json({ error: "Failed to remove participant" });
    }
  });
  app2.get("/api/users/:userId/trainings", requireAuth4, async (req, res) => {
    try {
      const currentUserId = req.session.userId;
      const { userId } = req.params;
      if (currentUserId !== userId) {
        const user = await storage.getUser(currentUserId);
        if (!user) {
          return res.status(401).json({ message: "User not found" });
        }
        const hasPermission = await storage.hasPermission(user.id, "manage_trainings") || user.role === "admin";
        if (!hasPermission) {
          return res.status(403).json({ message: "Insufficient permissions to view user trainings" });
        }
      }
      const participations = await storage.getUserTrainingParticipations(userId);
      res.json(participations);
    } catch (error) {
      console.error("Error fetching user trainings:", error);
      res.status(500).json({ error: "Failed to fetch user trainings" });
    }
  });
  app2.get("/api/courses", requireAuth4, async (req, res) => {
    try {
      const courses2 = await storage.getCourses();
      res.json(courses2);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  });
  app2.get("/api/courses/:id", requireAuth4, async (req, res) => {
    try {
      const course = await storage.getCourseById(req.params.id);
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }
      res.json(course);
    } catch (error) {
      console.error("Error fetching course:", error);
      res.status(500).json({ error: "Failed to fetch course" });
    }
  });
  app2.post("/api/courses", requireRole4(["admin", "moderator"]), async (req, res) => {
    try {
      const validatedData = insertCourseSchema.parse(req.body);
      const course = await storage.createCourse(validatedData);
      res.status(201).json(course);
    } catch (error) {
      console.error("Error creating course:", error);
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid course data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create course" });
    }
  });
  app2.put("/api/courses/:id", requireRole4(["admin", "moderator"]), async (req, res) => {
    try {
      const validatedData = insertCourseSchema.parse(req.body);
      const course = await storage.updateCourse(req.params.id, validatedData);
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }
      res.json(course);
    } catch (error) {
      console.error("Error updating course:", error);
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid course data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to update course" });
    }
  });
  app2.delete("/api/courses/:id", requireRole4(["admin"]), async (req, res) => {
    try {
      await storage.deleteCourse(req.params.id);
      res.json({ message: "Course deleted successfully" });
    } catch (error) {
      console.error("Error deleting course:", error);
      res.status(500).json({ error: "Failed to delete course" });
    }
  });
  app2.get("/api/courses/:courseId/lessons", requireAuth4, async (req, res) => {
    try {
      const lessons2 = await storage.getLessons(req.params.courseId);
      res.json(lessons2);
    } catch (error) {
      console.error("Error fetching lessons:", error);
      res.status(500).json({ error: "Failed to fetch lessons" });
    }
  });
  app2.get("/api/lessons/:id", requireAuth4, async (req, res) => {
    try {
      const lesson = await storage.getLessonById(req.params.id);
      if (!lesson) {
        return res.status(404).json({ error: "Lesson not found" });
      }
      res.json(lesson);
    } catch (error) {
      console.error("Error fetching lesson:", error);
      res.status(500).json({ error: "Failed to fetch lesson" });
    }
  });
  app2.post("/api/lessons", requireRole4(["admin", "moderator"]), async (req, res) => {
    try {
      const validatedData = insertLessonSchema.parse(req.body);
      const lesson = await storage.createLesson(validatedData);
      res.status(201).json(lesson);
    } catch (error) {
      console.error("Error creating lesson:", error);
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid lesson data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create lesson" });
    }
  });
  app2.put("/api/lessons/:id", requireRole4(["admin", "moderator"]), async (req, res) => {
    try {
      const validatedData = insertLessonSchema.omit({ courseId: true }).parse(req.body);
      const lesson = await storage.updateLesson(req.params.id, validatedData);
      if (!lesson) {
        return res.status(404).json({ error: "Lesson not found" });
      }
      res.json(lesson);
    } catch (error) {
      console.error("Error updating lesson:", error);
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid lesson data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to update lesson" });
    }
  });
  app2.delete("/api/lessons/:id", requireRole4(["admin", "moderator"]), async (req, res) => {
    try {
      await storage.deleteLesson(req.params.id);
      res.json({ message: "Lesson deleted successfully" });
    } catch (error) {
      console.error("Error deleting lesson:", error);
      res.status(500).json({ error: "Failed to delete lesson" });
    }
  });
  app2.get("/api/my-enrollments", requireAuth4, async (req, res) => {
    try {
      const userId = req.session.userId;
      const enrollments2 = await storage.getUserEnrollments(userId);
      res.json(enrollments2);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
      res.status(500).json({ error: "Failed to fetch enrollments" });
    }
  });
  app2.post("/api/enroll/:courseId", requireAuth4, async (req, res) => {
    try {
      const userId = req.session.userId;
      const courseId = req.params.courseId;
      const existingEnrollments = await storage.getUserEnrollments(userId);
      const existingEnrollment = existingEnrollments.find((e) => e.courseId === courseId);
      if (existingEnrollment) {
        return res.status(400).json({ error: "Already enrolled in this course" });
      }
      const enrollment = await storage.enrollUser(userId, courseId);
      res.status(201).json(enrollment);
    } catch (error) {
      console.error("Error enrolling user:", error);
      res.status(500).json({ error: "Failed to enroll in course" });
    }
  });
  app2.post("/api/lessons/:lessonId/complete", requireAuth4, async (req, res) => {
    try {
      const userId = req.session.userId;
      const lessonId = req.params.lessonId;
      const { courseId } = req.body;
      const progress = await storage.updateLessonProgress(userId, lessonId, courseId, true);
      res.json(progress);
    } catch (error) {
      console.error("Error updating lesson progress:", error);
      res.status(500).json({ error: "Failed to update lesson progress" });
    }
  });
  app2.get("/api/courses/:courseId/my-progress", requireAuth4, async (req, res) => {
    try {
      const userId = req.session.userId;
      const courseId = req.params.courseId;
      const progress = await storage.getUserLessonProgress(userId, courseId);
      res.json(progress);
    } catch (error) {
      console.error("Error fetching progress:", error);
      res.status(500).json({ error: "Failed to fetch progress" });
    }
  });
  app2.get("/api/resources", requireAuth4, async (req, res) => {
    try {
      const resources2 = await storage.getResources();
      res.json(resources2);
    } catch (error) {
      console.error("Error fetching resources:", error);
      res.status(500).json({ error: "Failed to fetch resources" });
    }
  });
  app2.post("/api/resources", requireRole4(["admin", "moderator"]), async (req, res) => {
    try {
      const validatedData = insertResourceSchema.parse(req.body);
      const resource = await storage.createResource(validatedData);
      res.status(201).json(resource);
    } catch (error) {
      console.error("Error creating resource:", error);
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid resource data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create resource" });
    }
  });
  app2.put("/api/resources/:id", requireRole4(["admin", "moderator"]), async (req, res) => {
    try {
      const validatedData = insertResourceSchema.parse(req.body);
      const resource = await storage.updateResource(req.params.id, validatedData);
      if (!resource) {
        return res.status(404).json({ error: "Resource not found" });
      }
      res.json(resource);
    } catch (error) {
      console.error("Error updating resource:", error);
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid resource data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to update resource" });
    }
  });
  app2.delete("/api/resources/:id", requireRole4(["admin", "moderator"]), async (req, res) => {
    try {
      await storage.deleteResource(req.params.id);
      res.json({ message: "Resource deleted successfully" });
    } catch (error) {
      console.error("Error deleting resource:", error);
      res.status(500).json({ error: "Failed to delete resource" });
    }
  });
  app2.get("/api/my-certificates", requireAuth4, async (req, res) => {
    try {
      const userId = req.session.userId;
      const certificates2 = await storage.getUserCertificates(userId);
      res.json(certificates2);
    } catch (error) {
      console.error("Error fetching certificates:", error);
      res.status(500).json({ error: "Failed to fetch certificates" });
    }
  });
}

// server/routes/admin.ts
var requireAuth5 = (req, res, next) => {
  if (!req.session?.userId) {
    return res.status(401).json({ message: "Authentication required" });
  }
  next();
};
var requireRole5 = (roles) => {
  return async (req, res, next) => {
    if (!req.session?.userId) {
      return res.status(401).json({ message: "Authentication required" });
    }
    const user = await storage.getUser(req.session.userId);
    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }
    req.user = user;
    next();
  };
};
function registerAdminRoutes(app2) {
  app2.get("/api/permissions", requireRole5(["admin", "moderator"]), async (req, res) => {
    try {
      const users3 = await storage.getUsers();
      const allPermissions = [];
      for (const user of users3) {
        const userPermissions2 = await storage.getPermissions(user.id);
        allPermissions.push(...userPermissions2);
      }
      res.json(allPermissions);
    } catch (error) {
      console.error("Error fetching permissions:", error);
      res.status(500).json({ error: "Failed to fetch permissions" });
    }
  });
  app2.get("/api/permissions/:userId", requireAuth5, async (req, res) => {
    try {
      const { userId } = req.params;
      const currentUserId = req.session.userId;
      if (userId !== currentUserId) {
        const currentUser = await storage.getUser(currentUserId);
        if (!currentUser || currentUser.role !== "admin" && currentUser.role !== "moderator") {
          return res.status(403).json({ message: "Access denied" });
        }
      }
      const permissions3 = await storage.getPermissions(userId);
      res.json(permissions3);
    } catch (error) {
      console.error("Error fetching user permissions:", error);
      res.status(500).json({ error: "Failed to fetch user permissions" });
    }
  });
  app2.post("/api/permissions", requireRole5(["admin"]), async (req, res) => {
    try {
      const result = insertPermissionSchema.safeParse({
        ...req.body,
        grantedBy: req.session.userId
      });
      if (!result.success) {
        return res.status(400).json({ message: "Invalid permission data", errors: result.error.issues });
      }
      const permission = await storage.createPermission(result.data);
      res.status(201).json(permission);
    } catch (error) {
      console.error("Error creating permission:", error);
      res.status(500).json({ error: "Failed to create permission" });
    }
  });
  app2.delete("/api/permissions/:id", requireRole5(["admin"]), async (req, res) => {
    try {
      const { id } = req.params;
      await storage.revokePermission(id);
      res.json({ message: "Permission revoked successfully" });
    } catch (error) {
      console.error("Error revoking permission:", error);
      res.status(500).json({ error: "Failed to revoke permission" });
    }
  });
  app2.post("/api/admin/bulk-permissions", requireRole5(["admin"]), async (req, res) => {
    try {
      const { userId, permissions: permissions3, action } = req.body;
      const grantedBy = req.session.userId;
      if (action === "grant") {
        for (const permission of permissions3) {
          await storage.createPermission({
            userId,
            grantedBy,
            permission
          });
        }
      } else if (action === "revoke") {
        const userPermissions2 = await storage.getPermissions(userId);
        for (const permission of permissions3) {
          const existingPermission = userPermissions2.find((p) => p.permission === permission);
          if (existingPermission) {
            await storage.revokePermission(existingPermission.id);
          }
        }
      }
      res.json({ message: `Permissions ${action}ed successfully` });
    } catch (error) {
      console.error("Error managing bulk permissions:", error);
      res.status(500).json({ error: "Failed to manage permissions" });
    }
  });
  app2.get("/api/admin/permission-check/:userId/:permission", requireRole5(["admin", "moderator"]), async (req, res) => {
    try {
      const { userId, permission } = req.params;
      const hasPermission = await storage.hasPermission(userId, permission);
      res.json({ hasPermission });
    } catch (error) {
      console.error("Error checking permission:", error);
      res.status(500).json({ error: "Failed to check permission" });
    }
  });
  app2.get("/api/employee-categories", requireRole5(["admin", "moderator"]), async (req, res) => {
    try {
      const categories2 = await storage.getEmployeeCategories();
      res.json(categories2);
    } catch (error) {
      console.error("Error fetching employee categories:", error);
      res.status(500).json({ error: "Failed to fetch employee categories" });
    }
  });
  app2.post("/api/employee-categories", requireRole5(["admin"]), async (req, res) => {
    try {
      const result = insertEmployeeCategorySchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid employee category data", errors: result.error.issues });
      }
      const category = await storage.createEmployeeCategory(result.data);
      res.status(201).json(category);
    } catch (error) {
      console.error("Error creating employee category:", error);
      res.status(500).json({ error: "Failed to create employee category" });
    }
  });
  app2.patch("/api/employee-categories/:id", requireRole5(["admin"]), async (req, res) => {
    try {
      const { id } = req.params;
      const updatedCategory = await storage.updateEmployeeCategory(id, req.body);
      res.json(updatedCategory);
    } catch (error) {
      console.error("Error updating employee category:", error);
      res.status(500).json({ error: "Failed to update employee category" });
    }
  });
  app2.delete("/api/employee-categories/:id", requireRole5(["admin"]), async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteEmployeeCategory(id);
      res.json({ message: "Employee category deleted successfully" });
    } catch (error) {
      console.error("Error deleting employee category:", error);
      res.status(500).json({ error: "Failed to delete employee category" });
    }
  });
  app2.get("/api/system-settings", requireRole5(["admin", "moderator"]), async (req, res) => {
    try {
      const settings = await storage.getSystemSettings();
      res.json(settings);
    } catch (error) {
      console.error("Error fetching system settings:", error);
      res.status(500).json({ error: "Failed to fetch system settings" });
    }
  });
  app2.patch("/api/system-settings", requireRole5(["admin"]), async (req, res) => {
    try {
      const result = insertSystemSettingsSchema.partial().safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid system settings data", errors: result.error.issues });
      }
      const updatedSettings = await storage.updateSystemSettings(result.data);
      res.json(updatedSettings);
    } catch (error) {
      console.error("Error updating system settings:", error);
      res.status(500).json({ error: "Failed to update system settings" });
    }
  });
  app2.get("/api/views-config", requireRole5(["admin"]), async (req, res) => {
    try {
      const viewsConfig = await storage.getViewsConfig();
      res.json(viewsConfig);
    } catch (error) {
      console.error("Error fetching views config:", error);
      res.status(500).json({ error: "Failed to fetch views configuration" });
    }
  });
  app2.post("/api/views-config", requireRole5(["admin"]), async (req, res) => {
    try {
      const { views } = req.body;
      await storage.saveViewsConfig(views);
      res.json({ message: "Views configuration saved successfully" });
    } catch (error) {
      console.error("Error saving views config:", error);
      res.status(500).json({ error: "Failed to save views configuration" });
    }
  });
  app2.patch("/api/views-config/:viewId", requireRole5(["admin"]), async (req, res) => {
    try {
      const { viewId } = req.params;
      const updates = req.body;
      await storage.updateViewConfig(viewId, updates);
      res.json({ message: "View configuration updated successfully" });
    } catch (error) {
      console.error("Error updating view config:", error);
      res.status(500).json({ error: "Failed to update view configuration" });
    }
  });
  app2.get("/api/user/settings", requireAuth5, async (req, res) => {
    try {
      const userId = req.session.userId;
      const userSettings = await storage.getUserSettings(userId);
      res.json(userSettings);
    } catch (error) {
      console.error("Error fetching user settings:", error);
      res.status(500).json({ error: "Failed to fetch user settings" });
    }
  });
  app2.post("/api/user/settings", requireAuth5, async (req, res) => {
    try {
      const userId = req.session.userId;
      const settings = req.body;
      console.log("Received settings:", JSON.stringify(settings, null, 2));
      if (!settings || typeof settings !== "object") {
        return res.status(400).json({ error: "Invalid settings data" });
      }
      await storage.saveUserSettings(userId, settings);
      res.json({
        message: "User settings saved successfully",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (error) {
      console.error("Error saving user settings:", error);
      res.status(500).json({
        error: "Failed to save user settings",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.get("/api/admin/analytics/overview", requireRole5(["admin", "moderator"]), async (req, res) => {
    try {
      const stats = await storage.getStats();
      res.json(stats);
    } catch (error) {
      console.error("Error fetching analytics overview:", error);
      res.status(500).json({ error: "Failed to fetch analytics overview" });
    }
  });
  app2.get("/api/admin/analytics/users", requireRole5(["admin", "moderator"]), async (req, res) => {
    try {
      const users3 = await storage.getUsers();
      const totalUsers = users3.length;
      const activeUsers = users3.filter((u) => u.isActive).length;
      const usersByRole = users3.reduce((acc, user) => {
        acc[user.role] = (acc[user.role] || 0) + 1;
        return acc;
      }, {});
      res.json({
        totalUsers,
        activeUsers,
        inactiveUsers: totalUsers - activeUsers,
        usersByRole
      });
    } catch (error) {
      console.error("Error fetching user analytics:", error);
      res.status(500).json({ error: "Failed to fetch user analytics" });
    }
  });
  app2.get("/api/admin/analytics/content", requireRole5(["admin", "moderator"]), async (req, res) => {
    try {
      const [announcements3, documents3, events3, trainings3] = await Promise.all([
        storage.getAnnouncements(),
        storage.getDocuments(),
        storage.getEvents(),
        storage.getTrainings()
      ]);
      res.json({
        announcements: announcements3.length,
        documents: documents3.length,
        events: events3.length,
        trainings: trainings3.length
      });
    } catch (error) {
      console.error("Error fetching content analytics:", error);
      res.status(500).json({ error: "Failed to fetch content analytics" });
    }
  });
  app2.post("/api/admin/reset-test-data", requireRole5(["admin"]), async (req, res) => {
    try {
      await storage.resetToTestData();
      res.json({
        message: "\u2705 Donn\xE9es de test r\xE9initialis\xE9es avec succ\xE8s",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (error) {
      console.error("Error resetting test data:", error);
      res.status(500).json({
        error: "\u274C Erreur lors de la r\xE9initialisation des donn\xE9es de test"
      });
    }
  });
  app2.get("/api/search/users", requireAuth5, async (req, res) => {
    try {
      const { q } = req.query;
      if (!q || typeof q !== "string") {
        return res.status(400).json({ error: "Search query required" });
      }
      const users3 = await storage.getUsers();
      const searchResults = users3.filter(
        (user) => user.name.toLowerCase().includes(q.toLowerCase()) || user.username.toLowerCase().includes(q.toLowerCase()) || user.email?.toLowerCase().includes(q.toLowerCase()) || user.department?.toLowerCase().includes(q.toLowerCase())
      );
      const safeResults = searchResults.map(({ password, ...user }) => user);
      res.json(safeResults);
    } catch (error) {
      console.error("Error searching users:", error);
      res.status(500).json({ error: "Failed to search users" });
    }
  });
  app2.get("/api/search/content", requireAuth5, async (req, res) => {
    try {
      const { q } = req.query;
      if (!q || typeof q !== "string") {
        return res.status(400).json({ error: "Search query required" });
      }
      const [announcements3, documents3, events3] = await Promise.all([
        storage.getAnnouncements(),
        storage.getDocuments(),
        storage.getEvents()
      ]);
      const results = {
        announcements: announcements3.filter(
          (item) => item.title.toLowerCase().includes(q.toLowerCase()) || item.content?.toLowerCase().includes(q.toLowerCase())
        ),
        documents: documents3.filter(
          (item) => item.title.toLowerCase().includes(q.toLowerCase()) || item.description?.toLowerCase().includes(q.toLowerCase())
        ),
        events: events3.filter(
          (item) => item.title.toLowerCase().includes(q.toLowerCase()) || item.description?.toLowerCase().includes(q.toLowerCase())
        )
      };
      res.json(results);
    } catch (error) {
      console.error("Error searching content:", error);
      res.status(500).json({ error: "Failed to search content" });
    }
  });
}

// server/routes/index.ts
async function registerRoutes(app2) {
  registerAuthRoutes(app2);
  registerUsersRoutes(app2);
  registerContentRoutes(app2);
  registerMessagingRoutes(app2);
  registerTrainingRoutes(app2);
  registerAdminRoutes(app2);
  return (0, import_http.createServer)(app2);
}

// server/vite.ts
var import_express = __toESM(require("express"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_path3 = __toESM(require("path"), 1);
var import_vite2 = require("vite");

// vite.config.ts
var import_vite = require("vite");
var import_plugin_react = __toESM(require("@vitejs/plugin-react"), 1);
var import_path2 = __toESM(require("path"), 1);
var import_url = require("url");
var import_vite_plugin_runtime_error_modal = __toESM(require("@replit/vite-plugin-runtime-error-modal"), 1);
var import_meta = {};
var __dirname = import_path2.default.dirname((0, import_url.fileURLToPath)(import_meta.url));
var vite_config_default = (0, import_vite.defineConfig)(async () => {
  const plugins = [(0, import_plugin_react.default)()];
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0) {
    const cartographer = await import("@replit/vite-plugin-cartographer").then(
      (m) => m.cartographer()
    );
    plugins.push((0, import_vite_plugin_runtime_error_modal.default)(), cartographer);
  }
  return {
    plugins,
    resolve: {
      alias: {
        "@": import_path2.default.resolve(__dirname, "client", "src"),
        "@shared": import_path2.default.resolve(__dirname, "shared"),
        "@assets": import_path2.default.resolve(__dirname, "attached_assets")
      }
    },
    root: import_path2.default.resolve(__dirname, "client"),
    build: {
      outDir: import_path2.default.resolve(__dirname, "dist/public"),
      emptyOutDir: true
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"]
      }
    }
  };
});

// server/vite.ts
var import_nanoid = require("nanoid");
var import_url2 = require("url");
var import_meta2 = {};
var viteLogger = (0, import_vite2.createLogger)();
var __dirname2 = import_path3.default.dirname((0, import_url2.fileURLToPath)(import_meta2.url));
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await (0, import_vite2.createServer)({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = import_path3.default.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await import_fs.default.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${(0, import_nanoid.nanoid)()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = import_path3.default.resolve(__dirname2, "..", "dist", "public");
  if (!import_fs.default.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(import_express.default.static(distPath, { maxAge: "1y", immutable: true }));
  app2.use("*", (_req, res) => {
    res.setHeader("Cache-Control", "no-cache");
    res.sendFile(import_path3.default.resolve(distPath, "index.html"));
  });
}

// server/middleware/security.ts
var import_express_rate_limit = require("express-rate-limit");
var import_helmet = __toESM(require("helmet"), 1);
function configureSecurity(app2) {
  const isDev = process.env.NODE_ENV !== "production";
  const devCsp = {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      // Vite HMR nécessite unsafe-eval/inline + connexions ws/http locales
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      connectSrc: ["'self'", "ws:", "wss:", "http:", "https:"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      frameAncestors: ["'self'"]
    }
  };
  const prodCsp = {
    directives: {
      defaultSrc: ["'self'"],
      // Limiter 'unsafe-inline' aux styles si indispensable (Radix/Tailwind)
      styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      // Retirer unsafe-eval en production
      scriptSrc: ["'self'"],
      // Autoriser WebSocket uniquement via wss: si utilisé
      connectSrc: ["'self'", "wss:", "https:"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      frameAncestors: ["'self'"],
      upgradeInsecureRequests: []
    }
  };
  app2.use((0, import_helmet.default)({
    contentSecurityPolicy: isDev ? devCsp : prodCsp,
    crossOriginEmbedderPolicy: false
  }));
  const authLimiter = (0, import_express_rate_limit.rateLimit)({
    windowMs: 15 * 60 * 1e3,
    // 15 minutes
    max: 5,
    // Limit each IP to 5 requests per windowMs
    message: {
      error: "Too many authentication attempts. Please try again later."
    },
    standardHeaders: true,
    legacyHeaders: false
  });
  app2.use("/api/auth/login", authLimiter);
  app2.use("/api/auth/register", authLimiter);
  const apiLimiter = (0, import_express_rate_limit.rateLimit)({
    windowMs: 15 * 60 * 1e3,
    // 15 minutes
    max: 100,
    // Limit each IP to 100 requests per windowMs
    message: {
      error: "Too many API requests. Please try again later."
    },
    standardHeaders: true,
    legacyHeaders: false
  });
  app2.use("/api", apiLimiter);
}
function sanitizeInput(req, res, next) {
  if (req.body && typeof req.body === "object") {
    req.body = sanitizeObject(req.body);
  }
  next();
}
function sanitizeObject(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(sanitizeObject);
  }
  const sanitized = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      sanitized[key] = value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/javascript:/gi, "").replace(/on\w+\s*=/gi, "");
    } else if (typeof value === "object") {
      sanitized[key] = sanitizeObject(value);
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized;
}
function getSessionConfig() {
  return {
    secret: process.env.SESSION_SECRET || "intrasphere-dev-secret-change-in-production",
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 1e3 * 60 * 60 * 24,
      // 24 hours
      sameSite: "strict"
    }
  };
}

// server/migrations.ts
init_auth();
async function migratePasswordsToHash() {
  console.log("Starting password migration...");
  try {
    const users3 = await storage.getUsers();
    for (const user of users3) {
      if (!user.password.startsWith("$2b$")) {
        console.log(`Migrating password for user: ${user.username}`);
        const hashedPassword = await AuthService.hashPassword(user.password);
        await storage.updateUser(user.id, { password: hashedPassword });
        console.log(`\u2705 Password migrated for user: ${user.username}`);
      } else {
        console.log(`\u23ED\uFE0F  Password already hashed for user: ${user.username}`);
      }
    }
    console.log("\u2705 Password migration completed successfully");
  } catch (error) {
    console.error("\u274C Password migration failed:", error);
    throw error;
  }
}
async function ensureDefaultAdmin() {
  try {
    const users3 = await storage.getUsers();
    const adminExists = users3.some((user) => user.role === "admin");
    if (!adminExists) {
      console.log("Creating default admin user...");
      const hashedPassword = await AuthService.hashPassword("admin123!");
      const adminUser = {
        username: "admin",
        password: hashedPassword,
        name: "Administrateur",
        role: "admin",
        email: "admin@intrasphere.com",
        isActive: true,
        employeeId: "ADMIN001",
        department: "Direction",
        position: "Administrateur syst\xE8me"
      };
      await storage.createUser(adminUser);
      console.log("\u2705 Default admin user created");
      console.log("   Username: admin");
      console.log("   Password: admin123!");
      console.log("   \u26A0\uFE0F  Please change the default password after first login");
    }
  } catch (error) {
    console.error("\u274C Failed to create default admin:", error);
  }
}
async function runMigrations() {
  console.log("\u{1F504} Running database migrations...");
  await migratePasswordsToHash();
  await ensureDefaultAdmin();
  console.log("\u2705 All migrations completed");
}

// server/index.ts
var import_compression = __toESM(require("compression"), 1);
var import_path4 = __toESM(require("path"), 1);
var import_url3 = require("url");
var import_promises2 = __toESM(require("fs/promises"), 1);
var import_express_mysql_session = __toESM(require("express-mysql-session"), 1);
var import_connect_pg_simple = __toESM(require("connect-pg-simple"), 1);
var import_meta3 = {};
var __dirname3 = import_path4.default.dirname((0, import_url3.fileURLToPath)(import_meta3.url));
var app = (0, import_express2.default)();
var storagePath = process.env.STORAGE_PATH || "server/public/uploads";
void import_promises2.default.mkdir(storagePath, { recursive: true }).catch(() => {
});
app.use("/uploads", import_express2.default.static(storagePath));
if (process.env.NODE_ENV === "development" && process.env.REPL_ID) {
  app.set("trust proxy", 1);
} else {
  app.set("trust proxy", false);
}
configureSecurity(app);
app.use((0, import_compression.default)());
app.use(import_express2.default.json({ limit: "50mb" }));
app.use(import_express2.default.urlencoded({ extended: false, limit: "50mb" }));
app.use(sanitizeInput);
var sessionStore;
if (process.env.MYSQL_HOST || process.env.MYSQL_USER || process.env.MYSQL_DATABASE) {
  const MySQLStore = (0, import_express_mysql_session.default)(import_express_session.default);
  sessionStore = new MySQLStore({
    host: process.env.MYSQL_HOST || "localhost",
    port: parseInt(process.env.MYSQL_PORT || "3306", 10),
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "intrasphere",
    createDatabaseTable: true,
    charset: "utf8mb4_bin"
  });
} else if (process.env.DATABASE_URL) {
  const PGStore = (0, import_connect_pg_simple.default)(import_express_session.default);
  sessionStore = new PGStore({
    conString: process.env.DATABASE_URL,
    tableName: "session",
    schemaName: "public"
  });
}
app.use((0, import_express_session.default)({ ...getSessionConfig(), store: sessionStore }));
app.use((req, res, next) => {
  const start = Date.now();
  const path5 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path5.startsWith("/api")) {
      let logLine = `${req.method} ${path5} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
app.get("/healthz", (_req, res) => {
  res.json({ status: "ok" });
});
(async () => {
  await runMigrations();
  const server = await registerRoutes(app);
  if (process.env.DISABLE_WS !== "true") {
    initializeWebSocket(server);
  } else {
    log("WebSocket disabled via DISABLE_WS=true");
  }
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  const listenOptions = process.platform === "win32" ? { port, host: "0.0.0.0" } : { port, host: "0.0.0.0", reusePort: true };
  server.listen(listenOptions, () => {
    const reuseInfo = listenOptions.reusePort ? " with reusePort" : "";
    const computedStoreType = process.env.MYSQL_HOST || process.env.MYSQL_USER || process.env.MYSQL_DATABASE ? "mysql" : process.env.DATABASE_URL ? "postgres" : "memory";
    log(`serving on port ${port}${reuseInfo}`);
    log(`uploads dir: ${import_path4.default.resolve(storagePath)}`, "uploads");
    log(`session store: ${computedStoreType}`, "session");
  });
})();
