<template>
    <div class="container">

        <!-- Quotes Components-->
        <div class="row">
            <div class="col-xs-12">
              <br>
              <br>
              <button @click="selectedComponent = 'Quote'">Quote</button>
              <button @click="selectedComponent = 'Author'">Author</button>
              <button @click="selectedComponent = 'New'">New</button>
              <hr>
              <p>{{selectedComponent}}</p>
              <keep-alive>
                <component :is="selectedComponent">
                  <p>Default Content</p>
                </component>
              </keep-alive>
            </div>
        </div>

        <!-- Color Components-->
        <div class="row">
          <div class="col-xs-12">
              <br>
              <br>
              <button class="btn btn-primary" @click="selectedColorComponent = 'Blue'">Load Blue Template</button>
              <button class="btn btn-success" @click="selectedColorComponent = 'Green'">Load Green Template</button>
              <button class="btn btn-danger" @click="selectedColorComponent = 'Red'">Load Red Template</button>
              <hr>
              <keep-alive>
                <component :is="selectedColorComponent">
                  <h2 slot="title">The {{selectedColorComponent}} Component</h2>
                </component>
              </keep-alive>
          </div>
        </div>

        <!-- Quotes Project-->
        <div class="row">
          <div class="col-xs-12">
              <br>
              <br>
              <hr>
              <ProgressBar :maxQuotes="maxQuotes" :quoteCount="newQuotes.length"></ProgressBar>
              <hr>
              <NewQuote @quoteAdded="newQuotesAdded"></NewQuote>
              <QuoteGrid :quotes="newQuotes" @quoteDeleted="deleteQuote"></QuoteGrid>
              <hr>
              <div class="row">
                <div class="col-sm-12 text-center">
                  <div class="alert alert-info">Info: Click on a Quote to Delete it!</div>
                </div>
              </div>
          </div>
        </div>
        <br>
        <br>
        <hr>

        <!-- Handling User Input with Forms -->
        <h1 class="text-center">Handling User Input with Forms</h1>
        <hr>
        <br>
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model.lazy="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model.lazy="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model.lazy="message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="priority">
                        <option v-for="priority in priorities" :key="priority.id" :selected="priority === 'Medium'">{{ priority }}</option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <appSwitch v-model="dataSwitch"></appSwitch>
              </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button class="btn btn-primary" @click.prevent="submitted">Submit!</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <p style="white-space: pre-wrap;">Message: {{ message }}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="send in sendMail" :key="send.id">{{ send }}</li>
                        </ul>
                        <p>Gender: {{ gender }}</p>
                        <p>Priority: {{ priority }}</p>
                        <p>Switched: {{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Understanding Directives -->
        <br>
        <br>
        <h1 class="text-center">Understanding Directives</h1>
        <hr>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1 class="text-center">Built-in Directives</h1>
              <p v-text="'Some Text'"></p>
              <p v-html="'<strong>Some Text</strong>'"></p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1 class="text-center">Custom Directives</h1>
              <p v-onevents:click="clicked" v-highlight:background.blink="{delay: 900, currentColor: 'red', secondColor: 'coral', mainColor: 'blue'}">Global Directive: Color Background with delay</p>
              <p v-onevents:mousemove="mouseMoved" v-highlight:background="{mainColor: 'blue'}">Global Directive: Coloring Font without delay</p>
              <p v-onevents:mouseleave="mouseLeave" v-local-highlight:background.blink="{delay: 600, currentColor: 'tomato', secondColor: 'yellow', mainColor: 'green'}">Local Directive: Color Background with delay</p>
              <p v-onevents:mousemove="mouseMoved" v-local-highlight:color="{mainColor: 'green'}">Local Directive: Coloring Font without delay</p>
            </div>
          </div>
        </div>

        <!-- Understanding Filters & Mixins -->
        <br>
        <br>
        <h1 class="text-center">Understanding Filters & Mixins</h1>
        <hr>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <p>{{ text | toUppercase | to-lowercase }}</p>
              <br>
              <input type="text" v-model="inputText">
              <ul>
                <li v-for="fruit in filteredFruits" :key="fruit.id">{{ fruit }}</li>
              </ul>
            </div>
          </div>
        </div>

          <!-- Understanding Animations & Transitions -->
        <br>
        <br>
        <h1 class="text-center">Understanding Animations & Transitions</h1>
        <hr>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1>Animations</h1>
              <hr>
              <br>
              <select v-model="alertAnimation" class="form-control">
                <option value="fade">Fade</option>
               <option value="slide">Slide</option>
              </select>
              <br>
              <button class="btn btn-primary" @click="show = !show">Show Alert</button>
              <hr>
              <br><br>
              <transition :name="alertAnimation">
                <div class="alert alert-info" v-show="show">This is a Alert!!!</div>
              </transition>
              <transition :name="alertAnimation" type="animation">
                <div class="alert alert-info" v-show="show">This is a Alert!!!</div>
              </transition>
              <transition :name="alertAnimation" appear>
                <div class="alert alert-info" v-if="show">This is a Alert!!!</div>
              </transition>
              <transition enter-active-class="animated bounce"
                          leave-active-class="animated shake">
                <div class="alert alert-info" v-if="show">This is a Alert!!!</div>
              </transition>
              <transition :name="alertAnimation" mode="out-in">
                <div class="alert alert-info" v-if="show" key="info">This is a Alert!!!</div>
                <div class="alert alert-warning" v-else key="warning">This is a Warning!!!</div>
              </transition>
              <br>
              <hr>
              <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
              <br><br>
              <transition @before-enter="beforeEnter"
                          @enter="enter"
                          @after-enter="afterEnter"
                          @enter-cancelled="enterCancelled"
                          @before-leave="beforeLeave"
                          @leave="leave"
                          @after-leave="afterLeave"
                          @leave-cancelled="leaveCancelled"
                          :css="false">
                <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
              </transition>
              <br><br>
              <hr>
              <br><br>
              <button class="btn btn-primary"
              @click="alertComponent == 'SuccessAlert' ?
                      alertComponent = 'DangerAlert' :
                      alertComponent = 'SuccessAlert'">
                      Toggle Alert
              </button>
              <br><br>
              <transition name="fade" mode="out-in">
                <component :is="alertComponent"></component>
              </transition>
              <br><br>
              <hr>
              <br><br>
              <button class="btn btn-primary" @click="addItem">Add Fuit</button>
              <br><br>
              <hr>
              <ul class="list-group">
                <transition-group name="slide">
                  <li class="list-group-item"
                      v-for="(fruit, index) in fruits"
                      :key="index"
                      @click="removeItem(index)"
                      style="cursor: pointer;">{{ fruit }}</li>
                </transition-group>
              </ul>
            </div>
          </div>
        </div>

        <!-- App: Super Quiz -->
        <br><br>
        <h1 class="text-center">Super Quiz</h1>
        <hr>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <transition name="flip" mode="out-in">
                <component
                  :is="quizComponent"
                  :correct="correct"
                  @answered="answered($event)"
                  @confirmed="quizComponent = 'Question'">
                </component>
              </transition>
            </div>
          </div>
        </div>

        <!-- HTTP Requests -->
        <br><br>
        <h1 class="text-center">HTTP Requests</h1>
        <hr>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1>HTTP</h1>
              <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" v-model="userData.userName">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="userData.password">
              </div>
              <div class="form-group">
                <label>Age</label>
                <input type="number" class="form-control" v-model="userData.age" min="18" max="100">
              </div>
              <div class="form-group">
                <label>Mail</label>
                <input type="text" class="form-control" v-model="userData.email">
              </div>
              <button class="btn btn-primary" @click="submit">Submit</button>
              <hr>
              <label>Choose a node to save/fetch data: </label>
              <select class="form-control" v-model="node">
                <option value="data">Data</option>
                <option value="alternative">Alternative</option>
              </select>
              <br><br>
              <hr>
              <button style="display: block; margin: 0 auto;" class="btn btn-warning" @click="fetchUserData">Fetch Data</button>
              <hr>
              <ul class="list-group">
                <li class="list-group-item" v-for="user in fetchedUsers" :key="user.index">
                  <span class="item-info"><strong>Username:</strong> {{ user.userName }}</span>
                  <span class="item-info"><strong>Email:</strong> {{ user.email }}</span>
                  <span class="item-info"><strong>Age:</strong> {{ user.age }}</span>
                  <span class="item-info"><strong>Password:</strong> {{ user.password }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br><br><br>

        <!-- Using Centralized State -->
        <br><br>
        <h1 class="text-center">Using Centralized State</h1>
        <hr>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1>Vuex</h1>
              <Result></Result>
              <hr>
              <AnotherResult></AnotherResult>
              <hr>
              <Counter></Counter>
              <hr>
              <AnotherCounter></AnotherCounter>
            </div>
          </div>
        </div>
        <br><br><br>

    </div>
</template>

<script>
// import Quote from '../components/Quote.vue'
import QuoteGrid from '../components/QuoteGrid.vue'
import NewQuote from '../components/NewQuote.vue'
import ProgressBar from '../components/ProgressBar.vue'
import Author from '../components/Author.vue'
import New from '../components/New.vue'
import Blue from '../components/Blue.vue'
import Red from '../components/Red.vue'
import Green from '../components/Green.vue'
import Switch from '../components/Switch.vue'
import DangerAlert from '../components/DangerAlert.vue'
import SuccessAlert from '../components/SuccessAlert.vue'
import Answer from '../components/Answer.vue'
import Question from '../components/Question.vue'
import Result from '../components/Result.vue'
import AnotherResult from '../components/AnotherResult.vue'
import Counter from '../components/Counter.vue'
import AnotherCounter from '../components/AnotherCounter.vue'

  export default {
      components: {
        // Quote,
        Author,
        New,
        Red,
        Green,
        Blue,
        QuoteGrid,
        NewQuote,
        ProgressBar,
        appSwitch: Switch,
        SuccessAlert,
        DangerAlert,
        Answer,
        Question,
        Result,
        Counter,
        AnotherResult,
        AnotherCounter
      },
      data() {
        return {
          quizComponent: 'Question',
          correct: false,
          alertComponent: 'SuccessAlert',
          quoteTitle: 'The Quote',
          selectedComponent: 'Author',
          selectedColorComponent: 'Red',
          newQuotes: ['Just a quote to see something!'],
          maxQuotes: 10,
          userData: {
            userName: '',
            email: '',
            password: '',
            age: 18
          },
          message: '',
          sendMail: [],
          gender: 'Male',
          priorities: ['High','Medium','Low'],
          priority: 'Medium',
          dataSwitch: true,
          isSubmitted: false,
          text: 'Hello there!',
          inputText: '',
          fruits: ['Banana', 'Apple', 'Pineapple', 'Kiwi', 'Watermelon', 'Strawberry', 'Grappe', 'Passionfruit'],
          show: false,
          alertAnimation: 'fade',
          load: true,
          elementWidth: 100,
          fetchedUsers: [],
          resource: {},
          node: 'data'
        }
      },
      methods: {
        answered(isCorrect) {
          if(isCorrect) {
            this.quizComponent = 'Answer';
            this.correct = true;
          } else {
            this.quizComponent = 'Answer';
            this.correct = false;
          }
        },
        addItem() {
          const pos = Math.floor(Math.random() * this.fruits.length);
          this.fruits.splice(pos, 0, 'New Fruit');
        },
        removeItem(index) {
          this.fruits.splice(index, 1);
        },
        newQuotesAdded(quote) {
          if(this.newQuotes.length < this.maxQuotes) this.newQuotes.push(quote)
        },
        deleteQuote(index) {
          this.newQuotes.splice(index, 1)
        },
        submitted() {
          this.isSubmitted = true;
        },
        clicked() {
          console.log('I Was clicked!!!!');
        },
        mouseMoved() {
          console.log('The mouse moved!!!!');
        },
        mouseLeave() {
          console.log('The mouse levead!!!!');
        },
        beforeEnter(el) {
          console.log('beforeEnter');
          this.elementWidth = 100;
          el.style.width = this.elementWidth + 'px';
        },
        enter(el, done) {
          let round = 1;
          const interval = setInterval(() => {
            el.style.width = (this.elementWidth + round * 10) + 'px';
            round++;
            if(round > 20) {
              clearInterval(interval);
              done();
            }
          }, 20)
        },
        afterEnter(el) {
          console.log('afterEnter');
        },
        enterCancelled(el) {
          console.log('enterCancelled');
        },
        beforeLeave(el) {
          console.log('beforeLeave');
          this.elementWidth = 300
          el.style.width = this.elementWidth + 'px';
        },
        leave(el, done) {
          console.log('leave');
          let round = 1;
          const interval = setInterval(() => {
            el.style.width = (this.elementWidth - round * 10) + 'px';
            round++;
            if(round > 20) {
              clearInterval(interval);
              done();
            }
          }, 20)
        },
        afterLeave(el) {
          console.log('afterLeave');
        },
        leaveCancelled(el) {
          console.log('leaveCancelled');
        },
        submit() {
          this.resource.saveAlt(this.userData);
        },
        fetchUserData() {
          this.resource.getData({node: this.node})
          .then(response => {
            return response.json()
          })
          .then(data => {
            const users = [];
            for(let key in data) {
              users.push(data[key]);
            }
            this.fetchedUsers = users;
          })
          .catch(error => {
            console.log(error);
          })
        }
      },
      created() {
        const customActions = {
          saveAlt: {method: 'POST', url: `${this.node}.json`},
          getData: {method: 'GET'}
        };
        this.resource = this.$resource(`${this.node}.json`, {}, customActions);
      },
      directives: {
        'local-highlight': {
          bind(el, binding, vnode) {
            if(binding.modifiers.blink) {
              setTimeout(() => {
                setInterval(() => {
                  binding.value.currentColor === binding.value.secondColor ?
                                                 binding.value.currentColor = binding.value.mainColor :
                                                 binding.value.currentColor = binding.value.secondColor
                  if(binding.arg === 'background') {
                    el.style.backgroundColor = binding.value.currentColor
                  } else{
                    el.style.color = binding.value.currentColor
                  }
                }, binding.value.delay)
              }, binding.value.delay)

            } else {
              setTimeout(() => {
                if(binding.arg === 'background') {
                  el.style.backgroundColor = binding.value.mainColor
                } else{
                  el.style.color = binding.value.mainColor
                }
              }, binding.value.delay)
            }
          }
        },
        'onevents': {
          bind(el, binding, vnode) {
            el.addEventListener(binding.arg, binding.value)
          }
        }
      },
      filters: {
        toUppercase(value) {
          return value.toUpperCase()
        }
      },
      computed: {
        filteredFruits() {
          return this.fruits.filter((element) => {
            return element.toUpperCase().match(this.inputText.toUpperCase())
          })
        }
      },
      watch: {
        node(newValue, oldValue) {
          this.node = newValue;
        }
      }
  }

</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {

  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }

  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }

    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(20px);
    }
  }

  .flip-enter {

  }

  .flip-enter-active {
    animation: flip-in 0.2s ease-out forwards;
  }

  .flip-leave {
    transform: rotateY(0deg);
  }

  .flip-leave-active {
    animation: flip-out 0.2s ease-out forwards;
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg);
    }

    to {
      transform: rotateY(90deg);
    }
  }

  @keyframes flip-in {
    from {
      transform: rotateY(90deg);
    }

    to {
      transform: rotateY(0deg);
    }
  }

  .item-info {
    display: block;
    width: 100%;
    margin: 10px 0;
  }

</style>
