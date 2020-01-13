const getters = {
    // 房屋不动产
    earthArea: state => state.immovables.immovables.earthArea,
    houseArea: state => state.housePeople.housePeople.houseArea,
    privincehouseArea: state => state.immovables.immovables.privincehouseArea,
    organizationNumber: state => state.housePeople.housePeople.organizationNumber,
    landArea: state => state.immovables.immovables.landArea,
    unitsNumber: state => state.immovables.immovables.unitsNumber,
    landPlan: state => state.immovables.immovables.landPlan,
    units: state => state.immovables.immovables.units,
}
export default getters