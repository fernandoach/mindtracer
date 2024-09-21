import { Button, Card, CardBody, CardFooter, Chip, CircularProgress, Link } from '@nextui-org/react'

function CardProgress ({ progress, title, href }) {
  return (
    <Card className="w-[300px] h-[300px] border border-primary  bg-background/30 shadow-md rounded-md p-4 text-center">
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: 'w-36 h-36 drop-shadow-md',
            indicator: 'stroke-primary',
            track: 'stroke-primary/20',
            value: 'text-3xl font-semibold text-primary'
          }}
          value={progress}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className=" flex flex-col justify-center items-center pt-0">
        <Chip
          classNames={{
            base: 'border-1 border-primary/30',
            content: 'text-primary/90 text-small font-semibold'
          }}
          variant="bordered"
        >
          {title}
        </Chip>
        {
          progress < 100
            ? <Button as={Link} variant='ghost' color='primary' className='mt-4' href={href}>Continuar</Button>
            : <span className='text-sm mt-4 text-primary'>Gracias por su participación</span>
        }
      </CardFooter>
    </Card>
  )
}

export default CardProgress
