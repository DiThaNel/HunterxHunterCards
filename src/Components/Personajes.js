import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Fade from '@material-ui/core/Fade';


const labels = {
  1: '1 Estrella (Cazador Individual): Entregada a los cazadores que han hecho una contribución significativa en algún campo de conocimientos. Si se es un veterano, al recibirla pasan a ser Oficiales Superiores.',
  2: '2 Estrellas (Cazador Doble): Los cazadores con 1 Estrella, que han logrado que sus aprendices reciban 1 Estrella, reciben 2 Estrellas.',
  3: '3 Estrellas (Cazador Triple): Dada a los cazadores, con 2 Estrellas, que han hecho extraordinarias contribuciones a la sociedad en varios campos. Este es el rango más raro y más difícil de obtener, y es considerado un gran honor. El número de cazadores de 3 estrellas del que se tiene conocimiento es de 10.',
};

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 330,
      maxHeight:499,
      display:'inline-block',
      margin:'4rem 0.5rem 0rem 0.5rem',
      border:'double 3px #979797',
      cursor:'pointer',
      
    },
    CardHeader: {
      background: 'linear-gradient(45deg, rgb(64, 64, 64) 44%, rgb(241, 241, 241) 90%)',
      marginTop:'-2rem',
      position:'absolute',
      borderRadius: 7,
      marginLeft:'1rem',
      boxShadow:'0 4px 20px 0 rgba(0, 0, 0, 0.24), 0 7px 10px -5px rgb(96, 96, 96)',
      textAlign:'center',
      padding:'0rem 2rem 0rem 1rem',
      opacity:'0.9',
    },
    media: {
      height: '6rem',
      paddingTop: '80%', 
      backgroundPosition:'top',
      backgroundSize:'contain',
    },
    Rating: {
      color:'white',
      cursor:'auto',
    },
    CardContent: {
      borderTop:'double 3px #979797',
      textAlign:'justify',
      backgroundImage:"url('https://github.com/DiThaNel/HunterxHunterCards/blob/master/public/img/CardBg.jpg')",
      backgroundSize:'contain',
    },
    Typography: {
      fontSize:'1.1rem',
      textAlign:'justify',  
      lineHeight:'1.2rem',    
      color:'#1f1f1f',
      fontWeight:'500',
    },
    Box:{
      display: 'inline-flex',
      margin: '1.5rem 0 1rem 0',
    },
    CardContent1: {
      backgroundImage:"url('../../../../img/NEMbg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition:'center',
      backgroundRepeat: 'no-repeat',
      height:'459px',
      width:'300px',
      padding:'15px',
    },
    posicion1: {
      display:'flex',
      justifyContent:'Center',
      paddingTop:'4rem',
    },
    posicion1l: {
      position:'absolute',
      height: '9rem',
      transform: 'rotate(-57deg)',
      margin: 'auto',
      marginLeft:'5rem',
      borderLeft:'1px solid white',
    },
    posicion1l1: {
      position:'absolute',
      height: '9rem',
      transform: 'rotate(57deg)',
      margin: 'auto',
      marginLeft:'-5rem',
      borderLeft:'1px solid white',
    },
    posicion2: {
      display:'flex',
      paddingTop:'2rem',
      justifyContent:'space-between',
    },
    posicion2l: {
      position:'absolute',
      height: '8rem',
      transform: 'rotate(0deg)',
      margin:'auto',
      marginTop: '2.7rem',
      marginLeft:'1.43rem',
      borderLeft:'1px solid white',
    },
    posicion2l1: {
      position:'absolute',
      height: '8rem',
      transform: 'rotate(0deg)',
      margin:'auto',
      marginTop: '2.7rem',
      marginLeft:'17.43rem',
      borderLeft:'1px solid white',
      padding:'0.01rem'
    },
    posicion3: {
      display:'flex',
      paddingTop:'6.4rem',
      justifyContent:'space-between',
    },
    posicion3l: {
      position:'absolute',
      height: '9rem',
      transform: 'rotate(-57deg)',
      margin: 'auto',
      marginLeft:'6.2rem',
      borderLeft:'1px solid white',
    },
    posicion3l1: {
      position:'absolute',
      height: '8rem',
      transform: 'rotate(57deg)',
      margin: 'auto',
      marginLeft:'13rem',
      borderLeft:'1px solid white',
    },
    posicion4: {
      display:'flex',
      justifyContent:'Center',
      paddingTop:'2rem'
    },
    Tooltip: {
      textAlign:'justify',
    },
  }));

  function IconContainer(title) {
    const { value, ...id } = title;
      return (
        <Tooltip title={labels[value]}>
          <div {...id} />
        </Tooltip>
      );
  }

  export default function RecipeReviewCard({nombre,img,edad,tipo,nem,info,estrellas,habilidad1,habilidad2,habilidad3,habilidad4,habilidad5,habilidad6,children}) {
    const classes = useStyles();
    
return (
  
<div className='grow'>
  <Fade in={true} timeout={1200}>
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal" 
          
        >
          
    <FrontSide  animationDuration={700}>
      <Card className={classes.card} >
          <CardHeader className={classes.CardHeader}
          avatar={
            <div>
              <Tooltip className={classes.Tooltip} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={nem}>
                <Avatar src={tipo} className={classes.avatar} >
                </Avatar>
              </Tooltip>   
            </div>
          }
          title={nombre} 
          subheader={edad}
          action={
            <div>
              <Box className={classes.Box} component="fieldset" borderColor="transparent" m={1}>
                <Rating className={classes.Rating} name="hover-tooltip" value={estrellas} max={3} 
                IconContainerComponent={IconContainer} 
                />
              </Box>
            </div>
          }
        />
        <CardMedia 
          className={classes.media}
          image = {img}
          title={nombre}
        />
        <CardContent className={classes.CardContent}>
          <Typography className={classes.Typography} variant="body">
            {info}
          </Typography>
        </CardContent>
      </Card>
    </FrontSide>
    
    <BackSide animationDuration={700}>
      <Card className={classes.card} >
        <CardHeader className={classes.CardHeader}
          avatar={
            <div>
              <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={nem}>
                <Avatar src={tipo} className={classes.avatar} >
                </Avatar>
              </Tooltip>
            </div>
          }
          title={nombre}
          subheader={edad}
          action={
            <div>
              <Box className={classes.Box} component="fieldset" borderColor="transparent">
                <Rating className={classes.Rating} name="hover-tooltip" value={estrellas} max={3} 
                IconContainerComponent={IconContainer}
                />
              </Box>
            </div>
          }
        />
        <CardContent className={classes.CardContent1}>
          <Typography className={classes.Typography} variant="body">
            <div className={classes.posicion1}><Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={habilidad1}><Avatar src={tipo} className={classes.avatar} ></Avatar></Tooltip>
            <hr className={classes.posicion1l}></hr>
            <hr className={classes.posicion1l1}></hr>
            </div>
            <div className={classes.posicion2}><Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={habilidad2}><Avatar src={tipo} className={classes.avatar} ></Avatar></Tooltip>
            <hr className={classes.posicion2l}></hr>
            <hr className={classes.posicion2l1}></hr>
            <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={habilidad3}><Avatar src={tipo} className={classes.avatar} ></Avatar></Tooltip>         
            </div>
            <div className={classes.posicion3}><Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={habilidad4}><Avatar src={tipo} className={classes.avatar} ></Avatar></Tooltip>
            <hr className={classes.posicion3l}></hr> 
            <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={habilidad5}><Avatar src={tipo} className={classes.avatar} ></Avatar></Tooltip>
            <hr className={classes.posicion3l1}></hr> 
            </div>
            <div className={classes.posicion4}><Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={habilidad6}><Avatar src={tipo} className={classes.avatar} ></Avatar></Tooltip>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </BackSide>
  </Flippy>
  </Fade>
</div>
);}
  

 