import { FlatList, StyleSheet, Text, View } from "react-native"
import { PRODUCTS } from "../../utils/products"
import ProductListItem from "../../components/ProductListItem"
import { ListHeader } from "../../components/ListHeader"

export default function Home() {
    return (
        <View>
            <FlatList style={styles.flatList}
                data={PRODUCTS}
                renderItem={({ item }) => <ProductListItem product={item} />}
                keyExtractor={(item) => String(item.id)}
                numColumns={2}
                ListHeaderComponent={ListHeader}
                contentContainerStyle={styles.flatListContent}
                columnWrapperStyle={styles.flatListColumnWrapper}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatList: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    flatListColumnWrapper: {
        justifyContent: 'space-between'
    },
    flatListContent: {
        paddingBottom: 10,
    },
})