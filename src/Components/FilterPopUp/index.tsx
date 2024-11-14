// import { PopUpSubContainer, FilterPopUpHeadingContainer, ResetButton, FilterPopUpHeading, SortByContainer, PopUpSubHeading, SortByItemsContainer, SortItem, CategoryContainer, CategoryButtonContainer, CategoryItemSelectedContainer, NumberOfItemsSelected, ApplyButton, ArrowRight, PopupContainer } from '../Transaction/styledComponents';

// interface FilterPopupProps {
//   selectedSortOptions: string[];
//   selectedCategoryOptions: string[];
//   handleSortSelection: (option: string) => void;
//   togglePopUp: () => void;
//   applyFilters: () => void;
//   resetFilters: () => void;
//   openCategoryPopup: () => void;
//   sortOptions: string[];
// }

// const popupVariants = {
//     hidden: { opacity: 0, y: '100%' },
//     visible: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: '100%' },
//   };
  

// const FilterPopup: React.FC<FilterPopupProps> = ({ selectedSortOptions, selectedCategoryOptions, handleSortSelection, togglePopUp, applyFilters, resetFilters, openCategoryPopup, sortOptions }) => {
//   console.log(selectedSortOptions)
//   return (
//     <PopupContainer onClick={(e)=> e.stopPropagation()} variants={popupVariants} initial="hidden" animate="visible" exit="exit">
//             <PopUpSubContainer>
//         <FilterPopUpHeadingContainer>
//             <FilterPopUpHeading>Filter Transaction</FilterPopUpHeading>
//             <ResetButton onClick={resetFilters}>Reset</ResetButton>
//         </FilterPopUpHeadingContainer>

//         <SortByContainer>
//             <PopUpSubHeading>Sort By</PopUpSubHeading>
//             <SortByItemsContainer>
//             {sortOptions.map((option) => (
//                 <SortItem key={option} onClick={() => handleSortSelection(option)} isselected={selectedSortOptions.includes(option)}>
//                 {option}
//                 </SortItem>
//             ))}
//             </SortByItemsContainer>
//         </SortByContainer>

//         <CategoryContainer>
//             <PopUpSubHeading>Category</PopUpSubHeading>
//             <CategoryButtonContainer onClick={openCategoryPopup}>
//             <CategoryItemSelectedContainer>
//                 <NumberOfItemsSelected>{selectedCategoryOptions.length} Selected</NumberOfItemsSelected>
//                 <ArrowRight src="/Images/arrow-right-2.svg" />
//             </CategoryItemSelectedContainer>
//             </CategoryButtonContainer>
//         </CategoryContainer>

//         <ApplyButton onClick={applyFilters}>Apply</ApplyButton>
//         </PopUpSubContainer>
//     </PopupContainer>
    
//   );
// };

// export default FilterPopup;


import { PopUpSubContainer, FilterPopUpHeadingContainer, ResetButton, FilterPopUpHeading, SortByContainer, PopUpSubHeading, SortByItemsContainer, SortItem, CategoryContainer, CategoryButtonContainer, CategoryItemSelectedContainer, NumberOfItemsSelected, ApplyButton, ArrowRight, PopupContainer } from '../Transaction/styledComponents';

interface FilterPopupProps {
  selectedSortOptions: string[];
  selectedCategoryOptions: string[];
  handleSortSelection: (option: string) => void;
  togglePopUp: () => void;
  applyFilters: () => void;
  resetFilters: () => void;
  openCategoryPopup: () => void;
  sortOptions: string[];
}

const popupVariants = {
    hidden: { opacity: 0, y: '100%' },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '100%' },
  };
const FilterPopup: React.FC<FilterPopupProps> = ({
  selectedSortOptions,
  selectedCategoryOptions,
  handleSortSelection,
  togglePopUp,
  applyFilters,
  resetFilters,
  openCategoryPopup,
  sortOptions
}) => {
  console.log(selectedSortOptions)
  return (
    <PopupContainer onClick={(e) => e.stopPropagation()} variants={popupVariants} initial="hidden" animate="visible" exit="exit">
      <PopUpSubContainer>
        <FilterPopUpHeadingContainer>
          <FilterPopUpHeading>Filter Transaction</FilterPopUpHeading>
          <ResetButton onClick={resetFilters}>Reset</ResetButton>
        </FilterPopUpHeadingContainer>

        <SortByContainer>
          <PopUpSubHeading>Sort By</PopUpSubHeading>
          <SortByItemsContainer>
            {sortOptions.map((option) => (
              <SortItem
                key={option}
                onClick={() => handleSortSelection(option)}
                isselected={selectedSortOptions.includes(option)} // Ensure it's updating the selected state correctly
              >
                {option}
              </SortItem>
            ))}
          </SortByItemsContainer>
        </SortByContainer>

        <CategoryContainer>
          <PopUpSubHeading>Category</PopUpSubHeading>
          <CategoryButtonContainer onClick={openCategoryPopup}>
            <CategoryItemSelectedContainer>
              <NumberOfItemsSelected>{selectedCategoryOptions.length} Selected</NumberOfItemsSelected>
              <ArrowRight src="/Images/arrow-right-2.svg" />
            </CategoryItemSelectedContainer>
          </CategoryButtonContainer>
        </CategoryContainer>

        <ApplyButton onClick={applyFilters}>Apply</ApplyButton>
      </PopUpSubContainer>
    </PopupContainer>
  );
};


export default FilterPopup