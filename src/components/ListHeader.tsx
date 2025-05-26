import { Link } from 'expo-router';
import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import COLORS from '../constants';

const items = [
    {
        "name": "Electronics",
        "slug": "electronics",
        "imageUrl": "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "name": "Phones",
        "slug": "mobile-phones",
        "imageUrl": "https://images.unsplash.com/photo-1663245482988-22fad02654e3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "name": "Laptops",
        "slug": "laptops",
        "imageUrl": "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        "name": "Cameras",
        "slug": "cameras",
        "imageUrl": "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }

]

const placholderFirstName = 'Femmy';
export const placholderLastName = "Emmy";


export const ListHeader = () => {

    const getItemCount = () => {
        return 5; // Replace with actual logic to get item count from cart
    }

    return (
        <View style={[styles.headerContainer]}>
            <View style={styles.headerTop}>
                <View style={styles.headerLeft}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: `https://avatar.iran.liara.run/username?username=${placholderFirstName}+${placholderLastName}` }}
                            style={styles.avatarImage}
                        />
                        <Text style={styles.avatarText}>Hello {placholderFirstName}!</Text>
                    </View>
                </View>
                <View style={styles.headerRight}>
                    <Link style={styles.cartContainer} href='/cart' asChild>
                        <Pressable>
                            {({ pressed }) => (
                                <View>
                                    <FontAwesome
                                        name='shopping-cart'
                                        size={25}
                                        color='gray'
                                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                    />

                                    <View style={styles.badgeContainer}>
                                        <Text style={styles.badgeText}>{getItemCount()}</Text>
                                    </View>
                                </View>
                            )}
                        </Pressable>
                    </Link>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.signOutButton}
                    >
                        <FontAwesome name='sign-out' size={25} color={COLORS.error} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.heroContainer}>
                <Image
                    source={require('../../assets/images/hero.png')}
                    style={styles.heroImage}
                />
            </View>
            <View style={styles.categoriesContainer}>
                <Text style={styles.sectionTitle}>Categories</Text>
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <Link asChild href={`/categories/${item.slug}`}>
                            <Pressable style={styles.category}>
                                <Image
                                    source={{ uri: item.imageUrl }}
                                    style={styles.categoryImage}
                                />
                                <Text style={styles.categoryText}>{item.name}</Text>
                            </Pressable>
                        </Link>
                    )}
                    keyExtractor={item => item.name}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        gap: 20,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    avatarText: {
        fontSize: 16,
    },
    cartContainer: {
        padding: 10,
    },
    signOutButton: {
        padding: 10,
    },
    heroContainer: {
        width: '100%',
        height: 200,
    },
    heroImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    categoriesContainer: {},
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    category: {
        width: 100,
        alignItems: 'center',
        marginBottom: 16,
    },
    categoryImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 8,
    },
    categoryText: {},
    badgeContainer: {
        position: 'absolute',
        top: -5,
        right: 10,
        backgroundColor: COLORS.notificationBadgeBackground,
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: 'bold',
    },
});
