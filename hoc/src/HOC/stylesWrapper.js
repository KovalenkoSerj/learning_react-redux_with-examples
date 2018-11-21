import { styles } from '../styles/commonStyles';


const translateProps = (props) => {
	let _styles = {...styles.default}
	if(props.disable){
			_styles = {..._styles, ...styles.disable};  
	}
	const newProps = {...props,styles:_styles }
	return newProps;
} 


export default (WrappedComponent) => {
	return function wrappedRender(args) {
			return WrappedComponent(translateProps(args));
	}
}