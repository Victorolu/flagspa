import React from 'react';
import { Form, InputGroup, FormControl} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = ({handleOnTextChange}) => {
    return (
        <Form inline>
            <InputGroup className="mr-sm-2">
                <FormControl onChange={(e) => handleOnTextChange(e.target.value)} type="text" placeholder="Search" />
                <InputGroup.Append>
                    <InputGroup.Text><span><FontAwesomeIcon icon={['fas', 'search']} /></span></InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
}

export default SearchBar