import React, { Component } from 'react'
import { Text, View, Image,Modal, TouchableOpacity, Alert, TextInput, StyleSheet, Platform } from 'react-native'




export default class SDModal extends Component {
	constructor(props) {
		super(props)

		this.state = {
			visible: false,
			title: '标题',
			subtitle: '副标题'
		}
	}

	static defaultProps = {
		showAlertFunc: () => { }
	}

	showModal = () => {
		this.setState({
			visible: true
		})
	}
	dismissModal = () => {
		this.setState({
			visible: false
		})
	}

	alert = (title, subtitle) => {
		// alert('alert');
		this.setState({
			title,
			subtitle
		}, () => {

			this.showModal();
		}
		)
	}



	render() {
		const {
			visible,
			title,
			subtitle
		} = this.state;
		const {
			type = 'blue',
			onPress = () => { }
		} = this.props;
		return (
			<Modal
				animationType="fade"
				transparent={true}
				visible={visible}
				onRequestClose={() => { }}
			>
				<View style={{
					flex: 1,
					backgroundColor: 'rgba(0,0,0,0.2)',
				}}>
					<TouchableOpacity
						activeOpacity={1}
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center'
						}}
						onPress={() => {
							this.dismissModal()
						}
						}>
							{this.props.children}

					</TouchableOpacity>
				</View>
			</Modal>
		)
	}
}


const styles = StyleSheet.create({
	contentContainer: {
		position: 'absolute',
		top: 0, left: 0, right: 0, bottom: 0,
		alignItems: 'center'
	},
	title: {
		color: 'white',
		fontSize: 16,
		marginTop: 110,
		marginBottom: 57
	}

})
