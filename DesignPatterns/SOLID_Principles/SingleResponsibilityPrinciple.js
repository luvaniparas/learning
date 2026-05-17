class BreadBaker{
    bakerBread(){
        console.log("Baking Bread ...");
    }
}

class InventoryManager{
    manageInventory(){
        console.log("Inventory Managed ...");
    }
}

class SupplyOrder{
    orderSupplies(){
        console.log("Order supplier ...");
    }
}

class CustomerService{
    support(){
        console.log("Helping Customers ...");
    }
}

class CleanBakery{
    clean(){
        console.log("Cleaning ...")
    }
}

function main(){
    const baker = new BreadBaker();
    const manager = new InventoryManager();
    const supplier = new SupplyOrder();
    const service = new CustomerService();
    const cleanBakery = new CleanBakery();
    
    baker.bakerBread();
    manager.manageInventory();
    supplier.orderSupplies();
    service.support();
    cleanBakery.clean();
}

main();