export interface FilterGroupType {
    groupId: string;
    name: string;
    filters: FilterType[];
}


export interface FilterType {
    /**
     * The name/title of the filter group. 
     * Example: "Color", "Size", "Price", "Brand", "Category", "Subcategory", "Type", "Style", "Material", "Pattern"
     */
    filterGroupName: string;
    filterId: string;
    /**
     * The name of the filter.
     * Example: "Red", "Small", "100-200", "Apple", "Clothing", "T-Shirt", "Cotton", "Plain"
     */
    name: string;
}
