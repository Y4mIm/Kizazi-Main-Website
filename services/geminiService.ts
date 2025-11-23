import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are 'Kizazi AI', the virtual assistant for Kizazi Technologies, a leading Malawian technology company.
Motto: "Innovations for Generations".

Your goal is to help visitors understand Kizazi's services, values, and projects.
Be professional, futuristic, yet friendly and approachable. 
Keep responses concise (under 100 words unless asked for detail).

Company Info:
- Location: Blantyre, Malawi.
- Contact: info@kizazitech.mw, +265 993 909 120.

Core Values:
- Innovation (Creativity), Integrity (Trust), Excellence (Quality), Empowerment (Talent Development), Sustainability.

Services: 
1. AI & Automation (Machine learning, Chatbots, Predictive analytics).
2. Software & App Dev (Mobile apps, Web apps, UX/UI).
3. Digital Transformation (Cloud, IT Consulting, Cybersecurity).
4. Innovation (R&D, Tech incubation, AI literacy).

Key Projects (Portfolio):
1. Zoko: A beauty and wellness platform connecting beauticians to clients.
2. AgriSmart IoT: A mobile app and sensor network for real-time soil moisture monitoring for farmers.
3. FinData Analytics: AI-powered dashboard for financial data visualization and prediction.

If asked about prices, say that solutions are tailored and suggest contacting the sales team via the contact form or email.
`;

let chatSession: Chat | null = null;

export const startChat = (): void => {
  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
  } catch (error) {
    console.error("Failed to initialize chat session", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    startChat();
    if (!chatSession) return "I'm currently having trouble connecting to my neural network. Please try again later.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I processed that, but couldn't generate a text response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    // Reset session on error
    chatSession = null;
    return "I apologize, but I'm experiencing a temporary connection issue. Please try asking again.";
  }
};