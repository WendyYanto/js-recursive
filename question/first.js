const tree = {
  value: 'A',
  children: [
    {
      value: 'A1',
      children: [
        {
          value: 'A1I',
        },
        {
          value: 'A1II',
        },
      ],
    },
    {
      value: 'A2',
      children: [
        {
          value: 'A2I',
        },
        {
          value: 'A2II',
          children: [
            {
              value: 'A2II end'
            }
          ]
        },
      ],
    },
    {
      value: 'A3'
    },
  ],
}

function printTree(tree, space) {
  // Add your code here
}

printTree(tree, "")

// Output :
// Tree A
//  Tree A1
//   Tree A1I
//   Tree A1II
//  Tree A2
//   Tree A2I
//   Tree A2II
//    Tree A2II end
//  Tree A3