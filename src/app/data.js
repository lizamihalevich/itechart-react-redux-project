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
      dimensionId: 1,
      id: 1,
      title: 'abcd efg'
    },
    {
      dimensionId: 1,
      id: 2,
      title: '34fg'
    },
    {
      dimensionId: 2,
      id: 3,
      title: 'adbvd'
    },
    {
      dimensionId: 2,
      id: 4,
      title: 'Filter 4'
    },
    {
      dimensionId: 2,
      id: 5,
      title: 'test-filter4'
    },
    {
      dimensionId: 3,
      id: 6,
      title: 'abc defg'
    },
    {
      dimensionId: 3,
      id: 7,
      title: 'Filter test5'
    },
    {
      dimensionId: 3,
      id: 8,
      title: 'fghdfghs'
    }
  ];
};
