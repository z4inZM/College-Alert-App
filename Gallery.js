import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AlertPage = ({ navigation }) => {
  const CampusEvents = () => {
    // Sample event data
    const events = [
      { id: 1, name: 'Event 1', date: 'April 10, 2024', image: require('./assets/EVENTS/event (6).jpg'), description: 'Farewell' },
      { id: 2, name: 'Event 2', date: 'April 10, 2024', image: require('./assets/EVENTS/event (8).jpg'), description: 'Sports Gala' },
      
    ];
  
    return (
      <ScrollView style={styles.scrollView}>
        {events.map(event => (
          <TouchableOpacity key={event.id} style={styles.eventContainer} onPress={() => navigation.navigate('EventDetails', { eventId: event.id })}>
            <Image source={event.image} style={styles.eventImage} />
            <View style={styles.eventDetails}>
              <Text style={styles.eventName}>{event.name}</Text>
              <Text style={styles.eventDate}>{event.date}</Text>
              <Text style={styles.eventDescription}>{event.description}</Text>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  
  return (
    <View style={styles.container}>
      <CampusEvents />
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  eventImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  eventDetails: {
    flex: 1,
  },
  button: {
    backgroundColor: '#1F1B64',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText:
  {
color:"white",
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
    color: '#333',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1F1B64',
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

export default AlertPage;
