import { Container, ContainerProps } from '@chakra-ui/react'
interface Props extends Omit<ContainerProps, 'children'> {
    children?: React.ReactNode
    type?: 'default' | 'small'
    as?: React.ElementType // Allow specifying a different components type
}

export default function ContainerUtil({ children, type = 'default', ...props }: Props) {
    // let maxW = {
    //     lg: '80rem',
    //     xl: '90rem',
    // }
    // if (type === 'small') {
    //     maxW = {
    //         lg: '70rem',
    //         xl: '80rem',
    //     }
    // }

    return (
        <Container
            px={{
                base: 4,
                md: 8,
                lg: 12,
            }}
            maxW={{
                lg: '90rem',
                xl: '100rem',
            }}
            mx={'auto'}
            {...props}
        >
            {children}
        </Container>
    )
}