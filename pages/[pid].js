import React from 'react';
import AppCard from "../components/AppCard";
import Container from "../components/Container";
import { useRouter } from 'next/router';

export default function Breed() {
    const router = useRouter();
    const { pid } = router.query
    const breed = require(`../mocks/${pid}.json`);
    return (
        <Container>
            <AppCard full breed={breed}/>
        </Container>
    );
}