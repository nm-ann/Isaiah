import {StyleSheet} from 'react-native';
import * as colors from './colors.json';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
  },
  headerText: {
    color: colors.title,
    fontWeight: 'bold',
  },
  mainScreenHeaderText: {
    fontFamily: 'StamAshkenazCLM',
    fontSize: 30,
    color: colors.title,
  },
  chapterHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  chapterHeaderText: {
    fontSize: 20,
  },
});

export default styles;
