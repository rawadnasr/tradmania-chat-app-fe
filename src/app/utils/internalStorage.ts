import { Preferences } from '@capacitor/preferences';

export default class InternalStorage {

    static async setInStorage(key: string, value: any): Promise<any> {
        let stringifiedValue = JSON.stringify(value);
        return Preferences.set({ key, value: stringifiedValue });
    }

    static async getFromStorage<T>(key: string): Promise<T> {
        const result = await Preferences.get({ key });
        return result && result.value ? JSON.parse(result.value) : null;
    }

    static async removeFromStorage(key: string): Promise<any> {
        return Preferences.remove({ key });
    }

    static async removeMultipleFromStorage(keys: string[]): Promise<any> {
        return keys && keys?.forEach((key: string) => {
            return Preferences.remove({ key });
        })
    }

    static async clearStorage() {
        await Preferences.clear();
    }
}