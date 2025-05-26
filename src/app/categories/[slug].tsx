import { Redirect, Stack, useLocalSearchParams } from 'expo-router'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { CATEGORIES } from '../../utils/categories'
import { PRODUCTS } from '../../utils/products'
import COLORS from '../../constants'
import ProductListItem from '../../components/ProductListItem'

export default function Category() {
    // We use the slug parameter to fetch category data or perform other actions
    const { slug } = useLocalSearchParams<{ slug: string }>()

    const category = CATEGORIES.find(c => c.slug === slug)
    const products = PRODUCTS.filter(product => product.category.slug === slug)

    if (!category) {
        return <Redirect href={"/404"} />
    }

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: category.name,
                }}
            />
            <Image
                source={{ uri: category.imageUrl }}
                style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>{category.name}</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => String(item.id)}
                contentContainerStyle={styles.productList}
                renderItem={({ item }) => <ProductListItem product={item} />}
                numColumns={2}
                columnWrapperStyle={styles.productRow}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: COLORS.white
    },
    categoryImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 16,
        resizeMode: 'cover'
    },
    categoryName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16
    },
    productList: {
        flexGrow: 1,
    },
    productRow: {
        justifyContent: "space-between",
    },
    productContainer: {
        flex: 1,
        margin: 8,
    },
    productImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        resizeMode: 'cover'
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8
    },
    productPrice: {
        fontSize: 14,
        color: COLORS.gray,
        marginTop: 4
    }
})