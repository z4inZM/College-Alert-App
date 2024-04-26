import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const openDriveLink = (link) => {
  Linking.openURL(link)
    .catch((error) => console.error('Error opening link:', error));
};
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Image source={require('./main.png')} style={styles.image} />
          <Text style={styles.description}>
            Explore the world of education with us. We offer a variety of courses and programs to help you
            achieve your future goals.
          </Text>
          <TouchableOpacity style={styles.exploreButton} onPress={() => navigation.navigate('Gallery')}>
            <Text style={styles.exploreButtonText}>Explore More</Text>
          </TouchableOpacity>
          <Text style={styles.featuredText}>Notes</Text>
          <View style={styles.featuredPrograms}>
            <TouchableOpacity
            style={styles.featuredProgramItem}
            onPress={() => openDriveLink('https://drive.google.com/drive/folders/1QyClLNpygVLA1H2svPuaEmgAGtSRApCt?usp=sharing')}>
            <Image source={require('./imgs/computer.png')} style={styles.featuredProgramImage} />
            <Text style={styles.featuredProgramTitle}>Computer Science</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featuredProgramItem}
              onPress={() => openDriveLink('https://drive.google.com/drive/folders/1QyClLNpygVLA1H2svPuaEmgAGtSRApCt?usp=sharing')}>
              <Image source={require('./imgs/phy.png')} style={styles.featuredProgramImage} />
              <Text style={styles.featuredProgramTitle}>Physics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featuredProgramItem}
              onPress={() => openDriveLink('https://drive.google.com/drive/folders/1QyClLNpygVLA1H2svPuaEmgAGtSRApCt?usp=sharing')}>
              <Image source={require('./imgs/chem.png')} style={styles.featuredProgramImage} />
              <Text style={styles.featuredProgramTitle}>Chemistry</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featuredProgramItem}
              onPress={() => openDriveLink('https://drive.google.com/drive/folders/1QyClLNpygVLA1H2svPuaEmgAGtSRApCt?usp=sharing')}>
              <Image source={require('./imgs/eng.png')} style={styles.featuredProgramImage} />
              <Text style={styles.featuredProgramTitle}>English</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('TASK International College')}>
          <Ionicons name="home" size={24} color="white" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Signup')}>
          <Ionicons name="call" size={24} color="white" />
          <Text style={styles.navButtonText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Gallery')}>
          <Ionicons name="images-outline" size={24} color="white" />
          <Text style={styles.navButtonText}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },

  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  exploreButton: {
    backgroundColor: '#1F1B64',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  featuredText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featuredPrograms: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    marginBottom: 20,
},

  featuredProgramItem: {
    width: '45%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  featuredProgramImage: {
    width: '100%',
    height: 100,
     // Add margin below the image
    borderRadius: 5,
    resizeMode: 'contain',
},

  featuredProgramTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1F1B64', // Dark grey color for the navigation bar
    paddingVertical: 10,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: 'white',
    marginTop: 5,
  },
});
