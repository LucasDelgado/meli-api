export const categoriesAdapter = (filters: any): string[] => {
    try {
        const { path_from_root } = filters[0].values[0];
        return path_from_root.map((category: any) => category.name);
    } catch (error) {
        return [];
    }
};
