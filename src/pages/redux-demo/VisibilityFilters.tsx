import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../../store/actions";
import { VISIBILITY_FILTERS } from "../../store/constants";

const VisibilityFilters = ({ activeFilter, setFilter }:any) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter =  (VISIBILITY_FILTERS as any)[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state:any) => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
