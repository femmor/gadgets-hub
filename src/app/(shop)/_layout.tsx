import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants";
import { StyleSheet } from "react-native";
import { TabBarIcon } from "../../utils/tabBarIcon";

const TabsLayout = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.safeArea}>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: COLORS.tabBarActiveTintColor,
                    tabBarInactiveTintColor: COLORS.tabBarInactiveTintColor,
                    tabBarLabelStyle: {
                        fontSize: 16,
                    },
                    tabBarStyle: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        paddingTop: 10,
                    }
                }}
            >
                <Tabs.Screen name="index" options={{
                    headerShown: false,
                    title: 'Shop',
                    tabBarIcon: ({ color, size }) => (
                        <TabBarIcon name="shopping-cart" color={color} size={size} />
                    )
                }} />
                <Tabs.Screen name="orders" options={{
                    title: 'Orders',
                    tabBarIcon: ({ color, size }) => (
                        <TabBarIcon name="archive" color={color} size={size} />
                    )
                }} />
            </Tabs>
        </SafeAreaView>
    );
}

export default TabsLayout;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    }
})