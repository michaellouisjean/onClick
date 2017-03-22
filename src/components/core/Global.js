const container = {
  flex: 1,
  justifyContent: 'center',
  // alignItems: 'center',
  backgroundColor: '#F7F7F7',
};

const Global = {
  // -------------------------------------------- common
  colors: {
    primary: '#4D6DC3',
    secondary: '#27CCC0',
    accent: '#E12773',
    backgroundEven: '#ffffff',
    backgroundOdd: '#f5f8fa',
  },
  container,
  containerNav: {
    ...container,
    paddingTop: 70,
  },
  // -------------------------------------------- cards
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 30,
  },
  cardPercent: {
    fontSize: 30,
  },
  cardTags: {
    color: '#ffffff',
    fontSize: 13,
  },
  cardTagContainer: {
    backgroundColor: '#4D6DC3',
    padding: 4,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  // -------------------------------------------- Profile
  

  // -------------------------------------------- icons
  icons: {
    fontSize: 24,
  },
};

export default Global;
