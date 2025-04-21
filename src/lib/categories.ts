import {  Shield, Key, Lock, Sliders, Hash, MessageSquare, Braces } from "lucide-svelte"


export const customPasswordConfig = { id: "custom", label: "Custom", icon: Sliders, gridCols: 2, description: "Create a password with your own requirements." }
export const passPhraseConfig = {
    id: "passphrase",
    label: "Passphrase",
    icon: MessageSquare,
    gridCols: 2,
    description: "Word-based passwords that are easier to remember.",
}
export const pinConfig = { id: "pin", label: "PIN", icon: Hash, description: "Numeric PINs for devices and accounts." }
export const pronounceableConfig = {
    id: "pronounceable",
    label: "Pronounceable",
    icon: Braces,
    gridCols: 2,
    description: "Passwords that are easier to pronounce and remember.",
}

export const categories = [
    [
        {
            id: "memorable",
            label: "Memorable",
            icon: Shield,
            gridCols: 2,
            description: "Perfect for securing your computer or mobile device.",
        },
        {
            id: "strong",
            label: "Strong",
            icon: Lock,
            gridCols: 2,
            description: "Robust enough to keep your web hosting account secure.",
        },
        {
            id: "fortKnox",
            label: "Fort Knox",
            icon: Key,
            gridCols: 2,
            description: "Secure enough for almost anything, like root or administrator passwords.",
        },
        {
            id: "codeIgniter",
            label: "CodeIgniter Keys",
            icon: Key,
            gridCols: 2,
            description: "Can be used for any other 256-bit key requirement.",
        }
    ],
    [
        { id: "wpa160", label: "160-bit WPA Key", icon: Key, gridCols: 2, description: "Secure wireless network keys." },
        { id: "wpa504", label: "504-bit WPA Key", icon: Key, gridCols: 1, description: "Maximum security wireless network keys." },
    ],
    [
        { id: "wep64", label: "64-bit WEP Keys", icon: Key, gridCols: 2, description: "Basic wireless encryption keys." },
        { id: "wep128", label: "128-bit WEP Keys", icon: Key, gridCols: 2, description: "Standard wireless encryption keys." },
        { id: "wep152", label: "152-bit WEP Keys", icon: Key, gridCols: 2, description: "Enhanced wireless encryption keys." },
        { id: "wep256", label: "256-bit WEP Keys", icon: Key, gridCols: 2, description: "Maximum security wireless encryption keys." },
    ],
    [
        customPasswordConfig,
        passPhraseConfig,
        pinConfig,
        pronounceableConfig,
    ]
]