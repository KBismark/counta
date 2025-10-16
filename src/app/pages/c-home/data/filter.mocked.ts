import { FilterGroupType } from "@/interfaces/filters";

export const MOCK_FILTER_GROUPS: FilterGroupType[] = [
  {
    groupId: 'color',
    name: 'Color',
    filters: [
      { filterGroupName: 'Color', filterId: 'color-red', name: 'Red' },
      { filterGroupName: 'Color', filterId: 'color-blue', name: 'Blue' },
      { filterGroupName: 'Color', filterId: 'color-green', name: 'Green' },
      { filterGroupName: 'Color', filterId: 'color-black', name: 'Black' },
      { filterGroupName: 'Color', filterId: 'color-white', name: 'White' },
      { filterGroupName: 'Color', filterId: 'color-yellow', name: 'Yellow' },
    ],
  },
  {
    groupId: 'size',
    name: 'Size',
    filters: [
      { filterGroupName: 'Size', filterId: 'size-xs', name: 'XS' },
      { filterGroupName: 'Size', filterId: 'size-s', name: 'S' },
      { filterGroupName: 'Size', filterId: 'size-m', name: 'M' },
      { filterGroupName: 'Size', filterId: 'size-l', name: 'L' },
      { filterGroupName: 'Size', filterId: 'size-xl', name: 'XL' },
      { filterGroupName: 'Size', filterId: 'size-xxl', name: 'XXL' },
    ],
  },
  {
    groupId: 'brand',
    name: 'Brand',
    filters: [
      { filterGroupName: 'Brand', filterId: 'brand-apple', name: 'Apple' },
      { filterGroupName: 'Brand', filterId: 'brand-samsung', name: 'Samsung' },
      { filterGroupName: 'Brand', filterId: 'brand-sony', name: 'Sony' },
      { filterGroupName: 'Brand', filterId: 'brand-dell', name: 'Dell' },
      { filterGroupName: 'Brand', filterId: 'brand-hp', name: 'HP' },
      { filterGroupName: 'Brand', filterId: 'brand-lenovo', name: 'Lenovo' },
    ],
  },
  {
    groupId: 'price',
    name: 'Price',
    filters: [
      { filterGroupName: 'Price', filterId: 'price-0-50', name: '$0 - $50' },
      { filterGroupName: 'Price', filterId: 'price-50-100', name: '$50 - $100' },
      { filterGroupName: 'Price', filterId: 'price-100-200', name: '$100 - $200' },
      { filterGroupName: 'Price', filterId: 'price-200-500', name: '$200 - $500' },
      { filterGroupName: 'Price', filterId: 'price-500+', name: '$500+' },
    ],
  },
  {
    groupId: 'category',
    name: 'Category',
    filters: [
      { filterGroupName: 'Category', filterId: 'cat-electronics', name: 'Electronics' },
      { filterGroupName: 'Category', filterId: 'cat-fashion', name: 'Fashion' },
      { filterGroupName: 'Category', filterId: 'cat-home', name: 'Home & Kitchen' },
      { filterGroupName: 'Category', filterId: 'cat-sports', name: 'Sports' },
      { filterGroupName: 'Category', filterId: 'cat-toys', name: 'Toys' },
      { filterGroupName: 'Category', filterId: 'cat-beauty', name: 'Beauty' },
    ],
  },
  {
    groupId: 'type',
    name: 'Type',
    filters: [
      { filterGroupName: 'Type', filterId: 'type-new', name: 'New' },
      { filterGroupName: 'Type', filterId: 'type-used', name: 'Used' },
      { filterGroupName: 'Type', filterId: 'type-refurbished', name: 'Refurbished' },
      { filterGroupName: 'Type', filterId: 'type-open-box', name: 'Open Box' },
      { filterGroupName: 'Type', filterId: 'type-limited', name: 'Limited Edition' },
    ],
  },
  {
    groupId: 'style',
    name: 'Style',
    filters: [
      { filterGroupName: 'Style', filterId: 'style-modern', name: 'Modern' },
      { filterGroupName: 'Style', filterId: 'style-classic', name: 'Classic' },
      { filterGroupName: 'Style', filterId: 'style-minimalist', name: 'Minimalist' },
      { filterGroupName: 'Style', filterId: 'style-retro', name: 'Retro' },
      { filterGroupName: 'Style', filterId: 'style-vintage', name: 'Vintage' },
    ],
  },
  {
    groupId: 'material',
    name: 'Material',
    filters: [
      { filterGroupName: 'Material', filterId: 'mat-cotton', name: 'Cotton' },
      { filterGroupName: 'Material', filterId: 'mat-leather', name: 'Leather' },
      { filterGroupName: 'Material', filterId: 'mat-metal', name: 'Metal' },
      { filterGroupName: 'Material', filterId: 'mat-plastic', name: 'Plastic' },
      { filterGroupName: 'Material', filterId: 'mat-wood', name: 'Wood' },
      { filterGroupName: 'Material', filterId: 'mat-glass', name: 'Glass' },
    ],
  },
  {
    groupId: 'pattern',
    name: 'Pattern',
    filters: [
      { filterGroupName: 'Pattern', filterId: 'pattern-solid', name: 'Solid' },
      { filterGroupName: 'Pattern', filterId: 'pattern-striped', name: 'Striped' },
      { filterGroupName: 'Pattern', filterId: 'pattern-checked', name: 'Checked' },
      { filterGroupName: 'Pattern', filterId: 'pattern-floral', name: 'Floral' },
      { filterGroupName: 'Pattern', filterId: 'pattern-printed', name: 'Printed' },
    ],
  },
  {
    groupId: 'rating',
    name: 'Customer Rating',
    filters: [
      { filterGroupName: 'Customer Rating', filterId: 'rating-5', name: '5 Stars' },
      { filterGroupName: 'Customer Rating', filterId: 'rating-4', name: '4 Stars & Up' },
      { filterGroupName: 'Customer Rating', filterId: 'rating-3', name: '3 Stars & Up' },
      { filterGroupName: 'Customer Rating', filterId: 'rating-2', name: '2 Stars & Up' },
      { filterGroupName: 'Customer Rating', filterId: 'rating-1', name: '1 Star & Up' },
    ],
  },
  {
    groupId: 'availability',
    name: 'Availability',
    filters: [
      { filterGroupName: 'Availability', filterId: 'avail-in-stock', name: 'In Stock' },
      { filterGroupName: 'Availability', filterId: 'avail-out-stock', name: 'Out of Stock' },
      { filterGroupName: 'Availability', filterId: 'avail-preorder', name: 'Pre-Order' },
      { filterGroupName: 'Availability', filterId: 'avail-coming-soon', name: 'Coming Soon' },
      { filterGroupName: 'Availability', filterId: 'avail-limited', name: 'Limited Availability' },
    ],
  },
  {
    groupId: 'shipping',
    name: 'Shipping Options',
    filters: [
      { filterGroupName: 'Shipping Options', filterId: 'ship-free', name: 'Free Shipping' },
      { filterGroupName: 'Shipping Options', filterId: 'ship-fast', name: 'Fast Delivery' },
      { filterGroupName: 'Shipping Options', filterId: 'ship-international', name: 'International Shipping' },
      { filterGroupName: 'Shipping Options', filterId: 'ship-local', name: 'Local Pickup' },
      { filterGroupName: 'Shipping Options', filterId: 'ship-express', name: 'Express Shipping' },
    ],
  },
];
