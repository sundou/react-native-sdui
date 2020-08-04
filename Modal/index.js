import React, { Component } from 'react'
import { Text, View, Image,Modal, TouchableOpacity, Alert, TextInput, StyleSheet, Platform } from 'react-native'




export default class SDModal extends Component {
	constructor(props) {
		super(props)

		this.state = {
			visible: false,
			title: undefined,
			subtitle: undefined,
			buttons: []
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

	alert = ({title, subtitle, buttons}) => {
		// alert('alert');
		this.setState({
			title,
			subtitle,
			buttons
		}, () => {

			this.showModal();
		}
		)
	}



	render() {
		const {
			visible,
			title,
			subtitle,
			buttons
		} = this.state;
		const {
			style,
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
							alignItems: 'center',
							
						}}
						onPress={() => {
							this.dismissModal()
						}
						}>
							<View style={{
								// flex:1,
								overflow:'hidden',
								width: '100%',
								justifyContent: 'center',
								alignItems: 'center',
								...style
							}}>
							{this.props.children && this.props.children}
							{!this.props.children && <>
								{title && title}
								{subtitle && subtitle}
								{Array.isArray(buttons) && <View style={{
									backgroundColor:'#D8D8D8',
									flexDirection:'row'
								}}>{
									buttons.map(({onPress, text, style}) => {
										return <TouchableOpacity 
											activeOpacity={0.9}
										style={{
											flex:1, 
											minHeight: 50,
											backgroundColor:'white',
											marginTop:0.5,
											marginLeft: 0.5,
											justifyContent:'center',
											alignItems: 'center'
										}}
											onPress={() => {
												this.dismissModal()
												onPress && onPress()
											}}
										>
											<Text style={{...style}}>{text}</Text>
										</TouchableOpacity>
									})
								}</View>}
							</>}
							</View>
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
