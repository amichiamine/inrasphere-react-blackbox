import { randomUUID } from "crypto";
import { eq, desc, asc, sql, and } from "drizzle-orm";
import type {
  User, InsertUser,
  Announcement, InsertAnnouncement,
  Document as PgDocument, InsertDocument as PgInsertDocument,
  Event as PgEvent, InsertEvent as PgInsertEvent,
  Content as PgContent, InsertContent as PgInsertContent,
  Category as PgCategory, InsertCategory as PgInsertCategory,
} from "@shared/schema";

// Drizzle MySQL client and schema (runtime use)
import { db as mysqlDb } from "../db-mysql";
import * as mysqlSchema from "@shared/schema-mysql";

/**
 * DrizzleStorage
 * Implémentation persistante basée sur Drizzle + MySQL.
 * Note: seules les méthodes requises par les routes actuellement utilisées sont implémentées.
 * Les autres lèvent une erreur "Not implemented" et pourront être ajoutées itérativement.
 */
export class DrizzleStorage {
  // --- Utils internes ---

  private ensureMySQL() {
    // Si on veut éventuellement supporter Postgres plus tard, on pourra rediriger ici.
    if (!process.env.MYSQL_HOST && !process.env.MYSQL_USER && !process.env.MYSQL_DATABASE) {
      throw new Error("DrizzleStorage: MySQL non configuré (variables MYSQL_* manquantes).");
    }
  }

  // --- Users ---

  async getUser(id: string): Promise<User | undefined> {
    this.ensureMySQL();
    const rows = await mysqlDb.select().from(mysqlSchema.users).where(eq(mysqlSchema.users.id, id)).limit(1);
    // @ts-ignore type mapping runtime
    return rows[0] as User | undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    this.ensureMySQL();
    const rows = await mysqlDb.select().from(mysqlSchema.users).where(eq(mysqlSchema.users.username, username)).limit(1);
    // @ts-ignore
    return rows[0] as User | undefined;
  }

  async getUserByEmployeeId(employeeId: string): Promise<User | undefined> {
    this.ensureMySQL();
    const rows = await mysqlDb.select().from(mysqlSchema.users).where(eq(mysqlSchema.users.employeeId, employeeId)).limit(1);
    // @ts-ignore
    return rows[0] as User | undefined;
  }

  async createUser(user: InsertUser): Promise<User> {
    this.ensureMySQL();
    const id = randomUUID();
    await mysqlDb.insert(mysqlSchema.users).values({
      id,
      username: user.username,
      password: user.password,
      name: user.name,
      role: (user as any).role ?? "employee",
      avatar: (user as any).avatar ?? null,
      employeeId: (user as any).employeeId ?? null,
      department: (user as any).department ?? null,
      position: (user as any).position ?? null,
      isActive: (user as any).isActive ?? true,
      phone: (user as any).phone ?? null,
      email: (user as any).email ?? null,
    });
    const created = await this.getUser(id);
    if (!created) throw new Error("Failed to create user");
    return created;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User> {
    this.ensureMySQL();
    await mysqlDb.update(mysqlSchema.users)
      .set({
        username: (updates as any).username,
        password: (updates as any).password,
        name: (updates as any).name,
        role: (updates as any).role,
        avatar: (updates as any).avatar,
        employeeId: (updates as any).employeeId,
        department: (updates as any).department,
        position: (updates as any).position,
        isActive: (updates as any).isActive,
        phone: (updates as any).phone,
        email: (updates as any).email,
      })
      .where(eq(mysqlSchema.users.id, id));
    const updated = await this.getUser(id);
    if (!updated) throw new Error("User not found after update");
    return updated;
  }

  async getUsers(): Promise<User[]> {
    this.ensureMySQL();
    const rows = await mysqlDb.select().from(mysqlSchema.users).where(eq(mysqlSchema.users.isActive, true));
    // @ts-ignore
    return rows as User[];
  }

  // --- Announcements ---

  async getAnnouncements(): Promise<Announcement[]> {
    this.ensureMySQL();
    const rows = await mysqlDb.select().from(mysqlSchema.announcements).orderBy(desc(mysqlSchema.announcements.createdAt));
    // @ts-ignore
    return rows as Announcement[];
  }

  async getAnnouncementById(id: string): Promise<Announcement | undefined> {
    this.ensureMySQL();
    const rows = await mysqlDb.select().from(mysqlSchema.announcements).where(eq(mysqlSchema.announcements.id, id)).limit(1);
    // @ts-ignore
    return rows[0] as Announcement | undefined;
  }

  async createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement> {
    this.ensureMySQL();
    const id = randomUUID();
    await mysqlDb.insert(mysqlSchema.announcements).values({
      id,
      title: announcement.title,
      content: announcement.content,
      type: (announcement as any).type ?? "info",
      authorId: (announcement as any).authorId ?? null,
      authorName: (announcement as any).authorName,
      imageUrl: (announcement as any).imageUrl ?? null,
      icon: (announcement as any).icon ?? "📢",
      isImportant: (announcement as any).isImportant ?? false,
    });
    const created = await this.getAnnouncementById(id);
    if (!created) throw new Error("Failed to create announcement");
    return created;
  }

  async updateAnnouncement(id: string, updates: Partial<Announcement>): Promise<Announcement> {
    this.ensureMySQL();
    await mysqlDb.update(mysqlSchema.announcements)
      .set({
        title: (updates as any).title,
        content: (updates as any).content,
        type: (updates as any).type,
        authorId: (updates as any).authorId,
        authorName: (updates as any).authorName,
        imageUrl: (updates as any).imageUrl,
        icon: (updates as any).icon,
        isImportant: (updates as any).isImportant,
      })
      .where(eq(mysqlSchema.announcements.id, id));
    const updated = await this.getAnnouncementById(id);
    if (!updated) throw new Error("Announcement not found after update");
    return updated;
  }

  async deleteAnnouncement(id: string): Promise<void> {
    this.ensureMySQL();
    await mysqlDb.delete(mysqlSchema.announcements).where(eq(mysqlSchema.announcements.id, id));
  }

  // --- Documents ---

  async getDocuments(): Promise<PgDocument[]> {
    this.ensureMySQL();
    const rows = await mysqlDb.select().from(mysqlSchema.documents).orderBy(desc(mysqlSchema.documents.updatedAt));
    // @ts-ignore
    return rows as PgDocument[];
  }

  async getDocumentById(id: string): Promise<PgDocument | undefined> {
    this.ensureMySQL();
    const rows = await mysqlDb.select().from(mysqlSchema.documents).where(eq(mysqlSchema.documents.id, id)).limit(1);
    // @ts-ignore
    return rows[0] as PgDocument | undefined;
  }

  async createDocument(document: PgInsertDocument): Promise<PgDocument> {
    this.ensureMySQL();
    const id = randomUUID();
    await mysqlDb.insert(mysqlSchema.documents).values({
      id,
      title: (document as any).title,
      description: (document as any).description ?? null,
      category: (document as any).category,
      fileName: (document as any).fileName,
      fileUrl: (document as any).fileUrl,
      version: (document as any).version ?? "1.0",
    });
    const created = await this.getDocumentById(id);
    if (!created) throw new Error("Failed to create document");
    return created;
  }

  async updateDocument(id: string, updates: Partial<PgDocument>): Promise<PgDocument> {
    this.ensureMySQL();
    await mysqlDb.update(mysqlSchema.documents)
      .set({
        title: (updates as any).title,
        description: (updates as any).description,
        category: (updates as any).category,
        fileName: (updates as any).fileName,
        fileUrl: (updates as any).fileUrl,
        version: (updates as any).version,
      })
      .where(eq(mysqlSchema.documents.id, id));
    const updated = await this.getDocumentById(id);
    if (!updated) throw new Error("Document not found after update");
    return updated;
  }

  async deleteDocument(id: string): Promise<void> {
    this.ensureMySQL();
    await mysqlDb.delete(mysqlSchema.documents).where(eq(mysqlSchema.documents.id, id));
  }

  // --- Events ---

  async getEvents(): Promise<PgEvent[]> {
    this.ensureMySQL();
    const rows = await mysqlDb.select().from(mysqlSchema.events).orderBy(asc(mysqlSchema.events.date));
    // @ts-ignore
    return rows as PgEvent[];
  }

  async getEventById(id: string): Promise<PgEvent | undefined> {
    this.ensureMySQL();
    const rows = await mysqlDb.select().from(mysqlSchema.events).where(eq(mysqlSchema.events.id, id)).limit(1);
    // @ts-ignore
    return rows[0] as PgEvent | undefined;
  }

  async createEvent(event: PgInsertEvent): Promise<PgEvent> {
    this.ensureMySQL();
    const id = randomUUID();
    await mysqlDb.insert(mysqlSchema.events).values({
      id,
      title: (event as any).title,
      description: (event as any).description ?? null,
      date: (event as any).date,
      location: (event as any).location ?? null,
      type: (event as any).type ?? "meeting",
      organizerId: (event as any).organizerId ?? null,
    });
    const created = await this.getEventById(id);
    if (!created) throw new Error("Failed to create event");
    return created;
  }

  async updateEvent(id: string, updates: Partial<PgEvent>): Promise<PgEvent> {
    this.ensureMySQL();
    await mysqlDb.update(mysqlSchema.events)
      .set({
        title: (updates as any).title,
        description: (updates as any).description,
        date: (updates as any).date,
        location: (updates as any).location,
        type: (updates as any).type,
        organizerId: (updates as any).organizerId,
      })
      .where(eq(mysqlSchema.events.id, id));
    const updated = await this.getEventById(id);
    if (!updated) throw new Error("Event not found after update");
    return updated;
  }

  async deleteEvent(id: string): Promise<void> {
    this.ensureMySQL();
    await mysqlDb.delete(mysqlSchema.events).where(eq(mysqlSchema.events.id, id));
  }

  // --- Contents ---

  async getContents(): Promise<PgContent[]> {
    this.ensureMySQL();
    // Pas de table dédiée "contents" dans schema-mysql.ts (selon contenu fourni),
    // si elle est absente, on peut simuler via documents ou retourner vide.
    // Ici: on retourne vide pour garder compatibilité sans casser.
    return [];
  }

  async getContentById(_id: string): Promise<PgContent | undefined> {
    this.ensureMySQL();
    return undefined;
  }

  async createContent(_content: PgInsertContent): Promise<PgContent> {
    this.ensureMySQL();
    throw new Error("Not implemented: createContent (MySQL schema minimal)");
  }

  async updateContent(_id: string, _content: Partial<PgContent>): Promise<PgContent> {
    this.ensureMySQL();
    throw new Error("Not implemented: updateContent (MySQL schema minimal)");
  }

  async deleteContent(_id: string): Promise<void> {
    this.ensureMySQL();
    throw new Error("Not implemented: deleteContent (MySQL schema minimal)");
  }

  // --- Categories ---

  async getCategories(): Promise<PgCategory[]> {
    this.ensureMySQL();
    // Pas de table "categories" dans schema-mysql.ts (extrait fourni), on retourne vide
    return [];
  }

  async getCategoryById(_id: string): Promise<PgCategory | undefined> {
    this.ensureMySQL();
    return undefined;
  }

  async createCategory(_category: PgInsertCategory): Promise<PgCategory> {
    this.ensureMySQL();
    throw new Error("Not implemented: createCategory (MySQL schema minimal)");
  }

  async updateCategory(_id: string, _category: Partial<PgCategory>): Promise<PgCategory> {
    this.ensureMySQL();
    throw new Error("Not implemented: updateCategory (MySQL schema minimal)");
  }

  async deleteCategory(_id: string): Promise<void> {
    this.ensureMySQL();
    throw new Error("Not implemented: deleteCategory (MySQL schema minimal)");
  }

  // --- Stats ---

  async getStats(): Promise<{
    totalUsers: number;
    totalAnnouncements: number;
    totalDocuments: number;
    totalEvents: number;
    totalMessages: number;
    totalComplaints: number;
    newAnnouncements: number;
    updatedDocuments: number;
    connectedUsers: number;
    pendingComplaints: number;
  }> {
    this.ensureMySQL();

    const [usersCount] = await mysqlDb.select({ count: sql<number>`COUNT(*)` }).from(mysqlSchema.users);
    const [annCount] = await mysqlDb.select({ count: sql<number>`COUNT(*)` }).from(mysqlSchema.announcements);
    const [docCount] = await mysqlDb.select({ count: sql<number>`COUNT(*)` }).from(mysqlSchema.documents);
    const [evtCount] = await mysqlDb.select({ count: sql<number>`COUNT(*)` }).from(mysqlSchema.events);

    // Tables non incluses dans l'extrait: messages, complaints -> retourner 0
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
      pendingComplaints: 0,
    };
  }

  // --- Non implémenté (placeholder) ---

  async getMessages(_userId: string) { throw new Error("Not implemented"); }
  async getMessageById(_id: string) { throw new Error("Not implemented"); }
  async createMessage(_message: any) { throw new Error("Not implemented"); }
  async markMessageAsRead(_id: string) { throw new Error("Not implemented"); }
  async deleteMessage(_id: string) { throw new Error("Not implemented"); }

  async getComplaints() { throw new Error("Not implemented"); }
  async getComplaintById(_id: string) { throw new Error("Not implemented"); }
  async getComplaintsByUser(_userId: string) { throw new Error("Not implemented"); }
  async createComplaint(_complaint: any) { throw new Error("Not implemented"); }
  async updateComplaint(_id: string, _complaint: any) { throw new Error("Not implemented"); }
  async deleteComplaint(_id: string) { throw new Error("Not implemented"); }

  async getPermissions(_userId: string) { throw new Error("Not implemented"); }
  async createPermission(_permission: any) { throw new Error("Not implemented"); }
  async revokePermission(_id: string) { throw new Error("Not implemented"); }
  async hasPermission(_userId: string, _permission: string) { throw new Error("Not implemented"); }

  async getEmployeeCategories() { throw new Error("Not implemented"); }
  async getEmployeeCategoryById(_id: string) { throw new Error("Not implemented"); }
  async createEmployeeCategory(_category: any) { throw new Error("Not implemented"); }
  async updateEmployeeCategory(_id: string, _category: any) { throw new Error("Not implemented"); }
  async deleteEmployeeCategory(_id: string) { throw new Error("Not implemented"); }

  async getSystemSettings() { throw new Error("Not implemented"); }
  async updateSystemSettings(_settings: any) { throw new Error("Not implemented"); }

  async getTrainings() { throw new Error("Not implemented"); }
  async getTrainingById(_id: string) { throw new Error("Not implemented"); }
  async createTraining(_training: any) { throw new Error("Not implemented"); }
  async updateTraining(_id: string, _training: any) { throw new Error("Not implemented"); }
  async deleteTraining(_id: string) { throw new Error("Not implemented"); }
}
