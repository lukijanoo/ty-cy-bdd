export function parseAlertMessage(message: string, prefix: string): string | null {
    const parts = message.split(prefix);
    return parts[1] ? parts[1].trim() : null;
}
