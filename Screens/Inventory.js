import * as React from 'react';
import {StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper'

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
        fontSize: 25,
    },
});



const InventoryScreen = () => {

    return (

        <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title textStyle={{fontSize:20}}>Item Type</DataTable.Title>
                <DataTable.Title textStyle={{fontSize:20}}>Item Name</DataTable.Title>
                <DataTable.Title textStyle={{fontSize:20}}>Item Unit</DataTable.Title>
                <DataTable.Title textStyle={{fontSize:20}}>Inventory</DataTable.Title>
            </DataTable.Header>
        </DataTable>
    )
}

export default InventoryScreen;
