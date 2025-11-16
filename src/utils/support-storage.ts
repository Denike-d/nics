export interface SupportComplaint {
  id: string;
  subject: string;
  dateSubmitted: string;
  status: "Open" | "In Progress" | "Resolved" | "Closed";
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "support";
  senderName: string;
  timestamp: Date;
  attachment?: {
    name: string;
    size: string;
  };
}

const STORAGE_KEY_COMPLAINTS = "support_complaints";
const STORAGE_KEY_CHATS = "support_chats";

// Generate a unique complaint ID
export function generateComplaintId(): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `COMP-${timestamp}-${random}`;
}

// Save a new complaint
export function saveComplaint(complaint: SupportComplaint): void {
  const complaints = getAllComplaints();
  complaints.push(complaint);
  localStorage.setItem(STORAGE_KEY_COMPLAINTS, JSON.stringify(complaints));
}

// Get all complaints
export function getAllComplaints(): SupportComplaint[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY_COMPLAINTS);
  if (!stored) return [];
  
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

// Get a complaint by ID
export function getComplaintById(id: string): SupportComplaint | undefined {
  const complaints = getAllComplaints();
  return complaints.find((c) => c.id === id);
}

// Update complaint status
export function updateComplaintStatus(
  id: string,
  status: SupportComplaint["status"]
): void {
  const complaints = getAllComplaints();
  const index = complaints.findIndex((c) => c.id === id);
  
  if (index !== -1) {
    complaints[index].status = status;
    localStorage.setItem(STORAGE_KEY_COMPLAINTS, JSON.stringify(complaints));
  }
}

// Save messages for a complaint
export function saveChatMessages(complaintId: string, messages: ChatMessage[]): void {
  if (typeof window === "undefined") return;
  
  const chats = getAllChats();
  chats[complaintId] = messages.map((msg) => ({
    ...msg,
    timestamp: msg.timestamp.toISOString(),
  }));
  localStorage.setItem(STORAGE_KEY_CHATS, JSON.stringify(chats));
}

// Get messages for a complaint
export function getChatMessages(complaintId: string): ChatMessage[] {
  if (typeof window === "undefined") return [];
  
  const stored = localStorage.getItem(STORAGE_KEY_CHATS);
  if (!stored) return [];
  
  try {
    const chats = JSON.parse(stored);
    const messages = chats[complaintId] || [];
    
    // Convert timestamp strings back to Date objects
    return messages.map((msg: any) => ({
      ...msg,
      timestamp: new Date(msg.timestamp),
    }));
  } catch {
    return [];
  }
}

// Get all chats (for debugging/admin purposes)
function getAllChats(): Record<string, any[]> {
  if (typeof window === "undefined") return {};
  
  const stored = localStorage.getItem(STORAGE_KEY_CHATS);
  if (!stored) return {};
  
  try {
    return JSON.parse(stored);
  } catch {
    return {};
  }
}
