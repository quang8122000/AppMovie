import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../configs/style';
import BackdropPath from '../../components/backdropPath';
import StarRating from 'react-native-star-rating';
import ItemTraller from '../../screens/Details/modules/itemTraller';
import {connect} from 'react-redux';
import {trallerAction} from '../../redux/traller/action';

class DetailsScreen extends Component<any, any> {
  item: any;
  constructor(props) {
    super(props);
    this.item = props.route.params;
    this.state = {};
  }

  componentDidMount() {
    console.log('id', this.item.id);
    this.props.getALLTrallers(this.item.id);
  }
  renderItem({item}) {
    return (
      <ItemTraller
        source={item?.source}
        name={item?.name}
        size={item?.size}
        type={item?.type}
      />
    );
  }

  render() {
    // console.log('arrTraller', this.props.allTraller.youtube[3].source);
    // console.log('source', this.youtube.source);
    let url = 'https://image.tmdb.org/t/p/w500';
    // const {source} = this.props.allTraller.youtube;
    const {
      original_title,
      overview,
      backdrop_path,
      release_date,
      popularity,
      vote_count,
      vote_average,
      id,
    } = this.item;

    return (
      <>
        <View>
          <BackdropPath
            image={{uri: `${url}/${backdrop_path}`}}
            title={original_title}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <ScrollView style={{backgroundColor: Colors.gray}}>
          <View style={Styles.container}>
            <View>
              <Text style={Styles.allStyleText}>OverView</Text>
              <Text style={Styles.textContent} numberOfLines={20}>
                {overview}
              </Text>
            </View>
            <View style={Styles.allContent}>
              <Text style={Styles.allStyleText}>Access times : </Text>
              <Text style={Styles.textContent}>{popularity}</Text>
            </View>
            <View style={Styles.allContent}>
              <Text style={Styles.allStyleText}>Release Date : </Text>
              <Text style={Styles.textContent}>{release_date}</Text>
            </View>
            <View style={Styles.contentRating}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={(vote_average * 5) / 10}
                emptyStar={'star-o'}
                fullStar={require('../../assets/images/favourites.png')}
                containerStyle={{
                  width: wp('60'),
                  alignSelf: 'flex-start',
                  marginBottom: wp('3'),
                }}
              />
              <Text style={Styles.textContent}>{vote_count}</Text>
            </View>
            <View style={Styles.flatList}>
              <Text
                style={{
                  color: '#D4AC0D',
                  fontWeight: 'bold',
                  fontSize: wp(6),
                  marginBottom: hp('2'),
                }}>
                Official Traller
              </Text>
              <FlatList
                data={this.props.allTraller.youtube}
                renderItem={this.renderItem}
                keyExtractor={item => item.source}
                horizontal={true}
              />
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
const mapStateFromProps = (state: any) => {
  return {
    allTraller: state.traller.allTraller,
  };
};
export default connect(mapStateFromProps, trallerAction)(DetailsScreen);
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.gray,
    padding: wp('2'),
  },
  textContent: {
    fontSize: wp('4'),
    color: Colors.white,
  },

  contentRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  allContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  allStyleText: {
    fontSize: wp('5'),
    fontWeight: 'bold',
    color: Colors.white,
    textShadowRadius: 20,
    textShadowColor: 'black',
  },
  flatList: {
    height: hp('40'),
    // backgroundColor: 'red',
  },
});
