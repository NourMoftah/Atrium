export interface Rider {
    id?: string;
    fullName: string;
    university: string;
    phone: string;
    hasBicycle: boolean; 
    status: 'pending' | 'active' | 'inactive';
}

export interface AuthResponse {
    token: string;
    rider: Rider;
}