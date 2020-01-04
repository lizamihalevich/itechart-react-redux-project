//TODO: getContexts(), getDimensions(),       getFilters()
//  id title         id title contextId     id title dimensionID

// redux toolkit - все кроме slice

export default function getContexts() {
  return [
    {
      contextId: 1,
      contextTitle: 'Context 1'
    },
    {
      contextId: 2,
      contextTitle: 'Context 2'
    }
  ];
}

export default function getDimensions() {
  return [
    {
      contextId: 1,
      dimId: 1,
      dimTitle: 'Dim 1'
    },
    {
      contextId: 1,
      dimId: 2,
      dimTitle: 'Dim 2'
    },
    {
      contextId: 2,
      dimId: 3,
      dimTitle: 'Dim 3'
    }
  ];
}

export default function getFilters() {
  return [
    {
      dimensionID: 1,
      filterId: 1,
      filterTitle: 'Filter 1'
    },
    {
      dimensionID: 1,
      filterId: 2,
      filterTitle: 'Filter 2'
    },
    {
      dimensionID: 2,
      filterId: 3,
      filterTitle: 'Filter 3'
    },
    {
      dimensionID: 2,
      filterId: 4,
      filterTitle: 'Filter 4'
    },
    {
      dimensionID: 2,
      filterId: 5,
      filterTitle: 'Filter 5'
    },
    {
      dimensionID: 3,
      filterId: 6,
      filterTitle: 'Filter 6'
    },
    {
      dimensionID: 3,
      filterId: 7,
      filterTitle: 'Filter 7'
    },
    {
      dimensionID: 3,
      filterId: 8,
      filterTitle: 'Filter 8'
    }
  ];
}
