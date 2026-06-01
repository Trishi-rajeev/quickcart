import { serve } from "inngest/next";
import { inngest } from "@/config";

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
});