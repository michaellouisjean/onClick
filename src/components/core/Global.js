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
    tchatColor: 'ghostwhite',
    backgroundEven: '#ffffff',
    backgroundOdd: 'white',
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
    paddingTop: 16,
    paddingRight: 16,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#4D6DC3',
    shadowOpacity: 0.2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 30,
  },
  cardDistance: {
    fontSize: 18,
  },
  cardTags: {
    color: '#ffffff',
    fontSize: 13,
  },
  cardTagContainer: {
    //backgroundColor: '#4D6DC3',
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
