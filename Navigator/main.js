import React, { Component } from 'react';
import {
	Text,
	View,
	Button
} from 'react-native';
import { TabNavigator } from 'react-navigation';

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home',
	};

	render() {
		return (
				<View>
					<Text>Hello! This is my homepage!</Text>
				</View>
		);
	}
}

class ChatScreen extends Component {
	static navigationOptions = {
		title: 'Chat',
	};

	render() {
		return (
			<View>
				<Text>Chat</Text>
			</View>
			);
	}
}

class RecentScreen extends Component {
	render() {
		return (
			<View>
				<Text>Recent</Text>
			</View>
			);
	}
}

class AllScreen extends Component {
	render() {
		return (
			<View>
				<Text>All</Text>
			</View>
			);
	}
}

const ChatApp = TabNavigator({
	Chat: { screen: ChatScreen },
	Recent: { screen: RecentScreen },
});

const HomeApp = TabNavigator({
	Home: { screen: ChatApp },
	All: { screen: AllScreen },
})

export default class Main extends Component {
	render() {
		return (
			<View>
				<HomeApp />
			</View>
			);
	}
}