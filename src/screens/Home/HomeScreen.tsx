import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../configs/style';
import ItemViewMovie from '../../components/itemViewMovie';
import {connect} from 'react-redux';
import {homeAction} from '../../redux/movie/action';
class HomeScreen extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      year: 2021,
      page: 1,
      Result: '',
    };
  }

  componentDidMount() {
    this.props.getALLMovies({year: this.state.year, page: this.state.page});
  }

  onPress = item => {
    this.props.navigation.navigate('Details', item);
  };
  renderItem(item, index) {
    let url = 'https://image.tmdb.org/t/p/w500';
    return (
      <ItemViewMovie
        title={item.original_title}
        image={{uri: `${url}/${item.poster_path}`}}
        content={item.overview}
        release_date={item.release_date}
        onPress={() => this.onPress(item)}
      />
    );
  }
  Search = () => {
    if (this.state.year != this.state.Result) {
      this.props.getALLMovies({year: this.state.year});
      this.setState({Result: this.state.year, page: 1});
    } else {
      this.props.getALLMovies({year: this.state.year, page: this.state.page});
    }
  };

  render() {
    console.log('ss3', this.props);

    return (
      <View style={Styles.container}>
        <View style={Styles.textInputSearch}>
          <TextInput
            onChangeText={text => this.setState({year: text})}
            placeholder="Nhập Năm"
            autoCompleteType={'cc-number'}
            placeholderTextColor={'black'}
            style={{
              height: hp(5),
              width: wp(70),
              marginVertical: hp(2),
              borderRadius: wp(3),
              backgroundColor: Colors.white,
              color: 'black',
            }}
          />
          <TouchableOpacity onPress={this.Search} style={Styles.btnSearch}>
            <Text style={Styles.textSearch}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.viewYearandPage}>
          <Text style={Styles.year}>Result: {this.state.Result}</Text>
          <Text
            onPress={() => {
              console.log('year', this.state.year);

              this.setState({page: this.state.page + 1});
              if (this.state.Result != this.state.year) {
                return this.props.getALLMovies({
                  year: !!this.state.Result || 2021,
                  page: this.state.page + 1,
                });
              }
              this.props.getALLMovies({
                year: this.state.Result,
                page: this.state.page + 1,
              });
            }}
            style={Styles.page}>
            Page: {this.state.page}
          </Text>
        </View>

        <View style={Styles.flatList}>
          <FlatList
            horizontal={false}
            data={this.props.allMovie.results}
            renderItem={({item, index}) => this.renderItem(item, index)}
            keyExtractor={item => item.id}
            numColumns={3}
          />
        </View>
      </View>
    );
  }
}

const mapStateFromProps = (state: any) => {
  return {
    allMovie: state.movie.allMovie,
  };
};
export default connect(mapStateFromProps, homeAction)(HomeScreen);
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  year: {
    color: Colors.white,
    fontSize: wp(5),
    fontWeight: 'bold',
    marginLeft: wp(2),
  },
  flatList: {
    flex: 1,
    padding: wp(2),
    backgroundColor: '#F9FFDE',
    borderRadius: wp(3),
    margin: wp(2),
    alignItems: 'center',
  },
  textInputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textSearch: {
    fontSize: wp(4.5),
    color: Colors.white,
    fontWeight: 'bold',
  },
  btnSearch: {
    width: wp(15),
    backgroundColor: Colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
    height: hp(4.5),
  },
  page: {
    color: Colors.white,
    fontSize: wp(5),
    fontWeight: 'bold',
    marginRight: wp(2),
  },
  viewYearandPage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
