import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { Product } from '../types/product'
import COLORS from '../constants'
import { Link } from 'expo-router'

interface ProductListItemProps {
    product: Product
}

export default function ProductListItem({ product }: ProductListItemProps) {
    return (
        <Link href={`/product/${product.slug}`} asChild>
            <Pressable style={styles.product}>
                <View style={styles.productImageContainer}>
                    <Image
                        source={product.heroImage}
                        style={styles.productImage}
                    />
                </View>
                <View style={styles.productTextContainer}>
                    <Text style={styles.productTitle}>{product.title}</Text>
                    <Text style={styles.productPrice}>${product.price}</Text>
                </View>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    product: {
        width: '48%',
        backgroundColor: COLORS.white,
        marginVertical: 8,
        borderRadius: 10,
        overflow: "hidden",
    },
    productImageContainer: {
        borderRadius: 10,
        width: "100%",
        height: 150,
    },
    productImage: {
        width: '100%',
        height: '100%',
        resizeMode: "cover"
    },
    productTextContainer: {},
    productTitle: {},
    productPrice: {},
})