import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { bg_matrix, bg_matrix2, css, html, js, node, mysql, react, git, unix, express} from './assets/';



function App() {
  return (
    <div className="darkside" id="top">
      <Parallax pages={6.3} style={{backgroundColor: "#000"}}>
        <ParallaxLayer offset={0} speed={0.5} >
          <div className='container mt-4'>
            <div className="card bg-white">
              <h3>Welcome in the Wild</h3>
              <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, velit eum. Eveniet beatae excepturi id ex illum doloremque fuga quae accusantium officia, minus veniam assumenda hic, ducimus perferendis sequi odit!
              Velit et blanditiis consequuntur recusandae id laudantium animi repudiandae, necessitatibus at iste possimus, dicta libero dolore. Quas, placeat aliquam. Velit ut vero eos repellat, fugit quos id earum numquam commodi!
              Excepturi atque voluptatem, repellat nulla alias explicabo, tenetur sunt illum eum quis voluptate rem voluptatibus facere assumenda accusamus saepe quaerat at molestias maiores consequuntur nihil expedita aperiam! Id, veritatis hic?
              Repellat tempore eaque consequuntur molestiae placeat! Iste eligendi earum molestias non exercitationem, vero nulla sunt. Quisquam doloribus placeat quidem cum nemo modi neque, totam et necessitatibus reiciendis mollitia accusantium rem.
              Doloribus, dolores qui. Dolor quisquam voluptatibus aut nostrum incidunt dolorem odit vel dolore? Vitae, illum fuga natus minima earum est hic dignissimos quidem facere molestiae eius tempore nulla eaque excepturi.</p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.8}>
          <div className="container">
            <div className="card bg-white" style={{ display: 'block', width: '40%', marginLeft: '10%' }}>
              <h3>An introduction du web Page</h3>
              <p className='m-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, velit eum. Eveniet beatae excepturi id ex illum doloremque fuga quae accusantium officia, minus veniam assumenda hic, ducimus perferendis sequi odit!
              Velit et blanditiis consequuntur recusandae id laudantium animi repudiandae, necessitatibus at iste possimus, dicta libero dolore. Quas, placeat aliquam. Velit ut vero eos repellat, fugit quos id earum numquam commodi!
              Excepturi atque voluptatem, repellat nulla alias explicabo, tenetur sunt illum eum quis voluptate rem voluptatibus facere assumenda accusamus saepe quaerat at molestias maiores consequuntur nihil expedita aperiam! Id, veritatis hic?
              Repellat tempore eaque consequuntur molestiae placeat! Iste eligendi earum molestias non exercitationem, vero nulla sunt. Quisquam doloribus placeat quidem cum nemo modi neque, totam et necessitatibus reiciendis mollitia accusantium rem.
              Doloribus, dolores qui. Dolor quisquam voluptatibus aut nostrum incidunt dolorem odit vel dolore? Vitae, illum fuga natus minima earum est hic dignissimos quidem facere molestiae eius tempore nulla eaque excepturi.</p>
            </div>

          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={1.4}>
          <div style={{ opacity: 0.5 }}>
            <img src={html} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={css} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            backgroundImage: `url(${bg_matrix})`,
            backgroundSize: '100%',
            backgroundPosition: 'center',
          }}
        >
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={-0.4}>
          <div style={{ opacity: 0.7 }}>
            <img src={git} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={unix} style={{ display: 'block', width: '10%', marginLeft: '80%', marginTop: '-15%'}} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.8}>
          <div className="container">
            <div className="card bg-white" style={{ display: 'block', width: '40%', marginLeft: '10%' }}>
              <h3>The discovery of the Unix and Git</h3>
              <p className='m-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, velit eum. Eveniet beatae excepturi id ex illum doloremque fuga quae accusantium officia, minus veniam assumenda hic, ducimus perferendis sequi odit!
              Velit et blanditiis consequuntur recusandae id laudantium animi repudiandae, necessitatibus at iste possimus, dicta libero dolore. Quas, placeat aliquam. Velit ut vero eos repellat, fugit quos id earum numquam commodi!</p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.8} speed={-0.8} style={{ pointerEvents: 'none' }}>
          <img src={js} style={{ width: '10%', marginLeft: '10%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={0.5} style={{ pointerEvents: 'none' }}>
          <div className="container">
            <div className="card bg-white" style={{ display: 'block', width: '40%', marginLeft: '30%' }}>
              <h3>And beyond the basic of javascript</h3>
              <p className='m-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, velit eum. Eveniet beatae excepturi id ex illum doloremque fuga quae accusantium officia, minus veniam assumenda hic, ducimus perferendis sequi odit!
              Velit et blanditiis consequuntur recusandae id laudantium animi repudiandae, necessitatibus at iste possimus, dicta libero dolore. Quas, placeat aliquam. Velit ut vero eos repellat, fugit quos id earum numquam commodi!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eaque laborum voluptas natus explicabo facere eius, doloremque quae voluptate tempore tenetur sint illo ratione nihil consequatur ea, asperiores aliquam dolore.</p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.4} style={{ pointerEvents: 'none' }}>
          <div className="container">
            <div className="card bg-white" style={{ display: 'block', width: '40%', marginLeft: '70%' }}>
              <h3>And then, React comes</h3>
              <p className='m-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, velit eum. Eveniet beatae excepturi id ex illum doloremque fuga quae accusantium officia, minus veniam assumenda hic, ducimus perferendis sequi odit!
              Velit et blanditiis consequuntur recusandae id laudantium animi repudiandae, necessitatibus at iste possimus, dicta libero dolore. Quas, placeat aliquam. Velit ut vero eos repellat, fugit quos id earum numquam commodi!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eaque laborum voluptas natus explicabo facere eius, doloremque quae voluptate tempore tenetur sint illo ratione nihil consequatur ea, asperiores aliquam dolore.</p>
            </div>
          </div>
        </ParallaxLayer>


        <ParallaxLayer offset={3.1} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={react} style={{ display: 'block', width: '50%', marginLeft: '30%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.3} speed={1.2} style={{ opacity: 0.5 }}>
          <img src={react} style={{ display: 'block', width: '10%', marginLeft: '20%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={2.5} style={{ opacity: 0.6 }}>
          <img src={react} style={{ display: 'block', width: '10%', marginLeft: '30%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={2} style={{ opacity: 0.4 }}>
          <img src={node} style={{ display: 'block', width: '10%', marginLeft: '40%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.6} speed={1.3} style={{ opacity: 0.3 }}>
          <img src={react} style={{ display: 'block', width: '10%', marginLeft: '50%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.7} speed={1.7} style={{ opacity: 0.6 }}>
          <img src={node} style={{ display: 'block', width: '10%', marginLeft: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.9} speed={0.3} style={{ opacity: 0.2 }}>
          <img src={react} style={{ display: 'block', width: '10%', marginLeft: '75%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} speed={0.2} style={{ opacity: 0.8 }}>
          <div className="container">
            <div className="card bg-white" style={{ display: 'block', width: '40%', marginLeft: '40%' }}>
              <h3>With a full experience in project</h3>
              <p className='m-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, velit eum. Eveniet beatae excepturi id ex illum doloremque fuga quae accusantium officia, minus veniam assumenda hic, ducimus perferendis sequi odit!
              Velit et blanditiis consequuntur recusandae id laudantium animi repudiandae, necessitatibus at iste possimus, dicta libero dolore. Quas, placeat aliquam. Velit ut vero eos repellat, fugit quos id earum numquam commodi!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eaque laborum voluptas natus explicabo facere eius, doloremque quae voluptate tempore tenetur sint illo ratione nihil consequatur ea, asperiores aliquam dolore.</p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.2} speed={0.3} style={{ opacity: 0.4 }}>
          <img src={mysql} style={{ display: 'block', width: '10%', marginLeft: '25%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={4.2} speed={0.3} style={{ opacity: 0.5 }}>
          <img src={express} style={{ display: 'block', width: '10%', marginLeft: '40%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={4.3} speed={0.2} style={{ opacity: 0.8 }}>
          <div className="container">
            <div className="card bg-white" style={{ display: 'block', width: '40%', marginLeft: '60%' }}>
              <h3>An introduction to the back end univers</h3>
              <p className='m-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, velit eum. Eveniet beatae excepturi id ex illum doloremque fuga quae accusantium officia, minus veniam assumenda hic, ducimus perferendis sequi odit!
              Velit et blanditiis consequuntur recusandae id laudantium animi repudiandae, necessitatibus at iste possimus, dicta libero dolore. Quas, placeat aliquam. Velit ut vero eos repellat, fugit quos id earum numquam commodi!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eaque laborum voluptas natus explicabo facere eius, doloremque quae voluptate tempore tenetur sint illo ratione nihil consequatur ea, asperiores aliquam dolore.</p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={5.3} speed={-0.1
        } style={{ opacity: 0.8 }}>
          <div className="container">
            <div className="card bg-white" style={{ display: 'block', width: '60%', marginLeft: '20%' }}>
              <h3>Finally, the revelation will come</h3>
              <p className='m-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, velit eum. Eveniet beatae excepturi id ex illum doloremque fuga quae accusantium officia, minus veniam assumenda hic, ducimus perferendis sequi odit!
              Velit et blanditiis consequuntur recusandae id laudantium animi repudiandae, necessitatibus at iste possimus, dicta libero dolore. Quas, placeat aliquam. Velit ut vero eos repellat, fugit quos id earum numquam commodi!</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eaque laborum voluptas natus explicabo facere eius, doloremque quae voluptate tempore tenetur sint illo ratione nihil consequatur ea, asperiores aliquam dolore.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eaque laborum voluptas natus explicabo facere eius, doloremque quae voluptate tempore tenetur sint illo ratione nihil consequatur ea, asperiores aliquam dolore.</p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5.6}
          speed={1}
          style={{
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundImage: `url('${bg_matrix2}')`,
            zIndex: -1
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer offset={5.9} speed={0.2} style={{ opacity: 1 }}>
          <div className="container">
            <div className="card bg-white" style={{ display: 'block', width: '60%', marginLeft: '20%' }}>
              <h1>To became a fullstack JS developper</h1>
            </div>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App
