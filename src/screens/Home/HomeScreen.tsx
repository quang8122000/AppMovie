import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../configs/style';
import ItemViewMovie from '../../components/itemViewMovie';
import {connect} from 'react-redux';
import {homeAction} from '../../redux/movie/action';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
class HomeScreen extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      year: 2021,
      page: 1,
      Result: '',
    };
  }

  // componentDidMount() {
  //   this.props.getALLMovies();
  // }

  onPress = item => {
    console.log('onPressitem', item);
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
    const {year, Result, page} = this.state;
    if (year != Result) {
      this.props.getALLMovies({year: year});
      this.setState({Result: year, page: 1});
    } else {
      this.props.getALLMovies({year: year, page: page});
    }
  };

  render() {
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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={Styles.year}>Result:</Text>
            <Text
              style={{
                color: Colors.yellow,
                fontSize: wp(4),
                fontWeight: '900',
              }}>
              {' '}
              {this.state.Result}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: wp(35),
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.page > 1) {
                  this.setState({page: this.state.page - 1});
                  if (this.state.Result != this.state.year) {
                    return this.props.getALLMovies({
                      year: !!this.state.Result || 2021,
                      page: this.state.page - 1,
                    });
                  }
                  this.props.getALLMovies({
                    year: this.state.Result,
                    page: this.state.page - 1,
                  });
                } else {
                  Alert.alert('Error !!!!', 'No has page = 0');
                }
              }}>
              <FontAwesome5
                name={'backward'}
                color={Colors.white}
                size={wp(6)}
              />
            </TouchableOpacity>
            <Text style={Styles.page}>Page: {this.state.page}</Text>

            <TouchableOpacity
              onPress={() => {
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
              }}>
              <FontAwesome5
                name={'forward'}
                color={Colors.white}
                size={wp(6)}
              />
            </TouchableOpacity>
          </View>
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
    fontSize: wp(4),
  },
  viewYearandPage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
