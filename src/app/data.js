// TODO: getContexts(), getDimensions(),       getFilters()
//  id title         id title contextId     id title dimensionID

// redux toolkit - все кроме slice
export const getContexts = () => {
  return [
    {
      id: 1,
      title: 'Context 1'
    },
    {
      id: 2,
      title: 'Context 2'
    }
  ];
};

export const getDimensions = () => {
  return [
    {
      contextId: 1,
      id: 1,
      title: 'Dim 1'
    },
    {
      contextId: 1,
      id: 2,
      title: 'Dim 2'
    },
    {
      contextId: 2,
      id: 3,
      title: 'Dim 3'
    }
  ];
};

export const getFilters = () => {
  return [
    {
      dimensionID: 1,
      filterId: 1,
      title: 'Filter 1'
    },
    {
      dimensionID: 1,
      id: 2,
      title: 'Filter 2'
    },
    {
      dimensionID: 2,
      id: 3,
      title: 'Filter 3'
    },
    {
      dimensionID: 2,
      id: 4,
      title: 'Filter 4'
    },
    {
      dimensionID: 2,
      id: 5,
      title: 'Filter 5'
    },
    {
      dimensionID: 3,
      id: 6,
      title: 'Filter 6'
    },
    {
      dimensionID: 3,
      id: 7,
      title: 'Filter 7'
    },
    {
      dimensionID: 3,
      id: 8,
      title: 'Filter 8'
    }
  ];
};
