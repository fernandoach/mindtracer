import { Button, Card, CardBody, CardFooter, Chip, CircularProgress, Link } from '@nextui-org/react'

function CardProgress ({ progress, title, href }) {
  return (
    <Card className="w-[300px] h-[300px] border border-foreground  bg-background/30 shadow-md rounded-md p-4 text-center">
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: 'w-36 h-36 drop-shadow-md',
            indicator: 'stroke-foreground',
            track: 'stroke-foreground/20',
            value: 'text-3xl font-semibold text-foreground'
          }}
          value={progress * 100 / 21}
          strokeWidth={4}
          showValueLabel={true}
          aria-labelledby='Porcentaje de progreso'
        />
      </CardBody>
      <CardFooter className=" flex flex-col justify-center items-center pt-0">
        <Chip
          classNames={{
            base: 'border-1 border-foreground/30',
            content: 'text-foreground/90 text-small font-semibold'
          }}
          aria-labelledby={ title }
          variant="bordered"
        >
          { title }
        </Chip>
        {
          (progress * 100 / 21) < 100
            ? <Button as={Link} variant='ghost' color='default' className='mt-4' href={href} aria-labelledby='Continuar'>Continuar</Button>
            : <span aria-labelledby='Gracias por su participación' className='text-sm mt-4 text-foreground'>Gracias por su participación</span>
        }
      </CardFooter>
    </Card>
  )
}

export default CardProgress
