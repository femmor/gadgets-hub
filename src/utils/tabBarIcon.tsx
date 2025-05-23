import { ComponentProps } from 'react';
import { FontAwesome } from "@expo/vector-icons";

interface TabBarIconProps {
    name: ComponentProps<typeof FontAwesome>['name'];
    color: string;
    size: number;
}

export function TabBarIcon({ name, color, size = 20 }: TabBarIconProps) {
    return (
        <FontAwesome
            name={name}
            size={size}
            color={color}
        />
    )
}