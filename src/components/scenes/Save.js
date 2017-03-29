showFavorites() {
    if (this.FAVORITES.length === 0) {
      console.log('user don\'t have any favorite');
      return (
        <View>
          <Text>Vous n'avez pas encore de favori !</Text>
          <TouchableOpacity onPress={Actions.home()}>
            <Text
              style={{
                color: Global.colors.secondary,
                fontWeight: 'bold',
              }}
            >
              Retour au résultats
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      console.log('user have some favorites');
      if (this.FAVORITES.length < this.user.favorites.length) {
        console.log('Loading ...', this.FAVORITES);
        return (
            <ActivityIndicator
              animating={this.state.animating}
              style={{ height: 80 }}
              size="large"
            />
        );
      }
      return (
        // console.log('Favorites are loaded: We have to mount this =>', FAVORITES)
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderCard}
        />
      );
    }
  }