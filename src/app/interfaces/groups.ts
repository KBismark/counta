export interface ProductsGroupType<HasItems extends boolean = false> {
    groupId: string;
    name: string;
    description?: string;
    shortDescription?: string;
    profileImage?: string[];
    coverImage?: string[];
    items?: HasItems extends true ? ProductsGroupType<boolean>[] : never;
}

export interface ProductsGroupTypeWithItems<HasNestedItems extends boolean = false, Infinite extends boolean = false> extends ProductsGroupType<true> {
    items: HasNestedItems extends false ? ProductsGroupType<false>[] : Infinite extends false ? ProductsGroupTypeWithItems[] : ProductsGroupTypeWithItems<true, true>[]
}

interface OneDepthNestedGroupItemType extends ProductsGroupType<true> {
    items: ProductsGroupType<false>[];
}

interface InfiniteItems extends ProductsGroupType<true> {
    items: ProductsGroupTypeWithItems<true, true>[];
}
