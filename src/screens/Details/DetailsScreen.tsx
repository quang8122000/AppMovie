import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../configs/style';
import BackdropPath from '../../components/backdropPath';
import StarRating from 'react-native-star-rating';

export default class DetailsScreen extends Component<any, any> {
  render() {
    console.log(this.props);
    let url = 'https://image.tmdb.org/t/p/w500';

    const {
      original_title,
      overview,
      backdrop_path,
      release_date,
      popularity,
      vote_count,
      vote_average,
    } = this.props.route.params;

    return (
      <>
        <View>
          <BackdropPath
            image={{uri: `${url}/${backdrop_path}`}}
            title={original_title}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>

        <View style={Styles.container}>
          <View>
            <Text style={Styles.allStyleText}>OverView</Text>
            <Text style={Styles.textContent} numberOfLines={10}>
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
              fullStarColor={Colors.yellow}
              containerStyle={{
                width: wp('60'),
                alignSelf: 'flex-start',
                marginBottom: wp('3'),
              }}
            />
            <Text style={Styles.textContent}>{vote_count}</Text>
          </View>
        </View>
      </>
    );
  }
}
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
  },
});
