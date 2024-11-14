import {
  PopUpSubContainer,
  FilterPopUpHeading,
  CategoryItemsContainer,
  SortItem,
  ApplyButton,
  CategoryPopupContainer,
} from "../Transaction/styledComponents";

interface CategoryPopupProps {
  selectedCategoryOptions: string[];
  handleCategorySelection: (option: string) => void;
  categoryOptions: string[];
  closeCategoryPopup: () => void;
}

const categoryPopupVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: 0 },
};

const CategoryPopup: React.FC<CategoryPopupProps> = ({
  selectedCategoryOptions,
  handleCategorySelection,
  categoryOptions,
  closeCategoryPopup,
}) => {
  return (
    <CategoryPopupContainer onClick = {(e)=> e.stopPropagation()}
      variants={categoryPopupVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <PopUpSubContainer>
        <FilterPopUpHeading>Choose Category</FilterPopUpHeading>
        <CategoryItemsContainer>
          {categoryOptions.map((category) => (
            <SortItem
              key={category}
              isselected={selectedCategoryOptions.includes(category)}
              onClick={() => handleCategorySelection(category)}
            >
              {category}
            </SortItem>
          ))}
        </CategoryItemsContainer>
        <ApplyButton onClick={closeCategoryPopup}>Done</ApplyButton>
      </PopUpSubContainer>
    </CategoryPopupContainer>
  );
};

export default CategoryPopup;
