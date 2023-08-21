import{_ as n,o as s,c as a,e as t}from"./app-fd419a65.js";const p="/images/jsList/syntax/diedai_res.png",e={},o=t(`<h1 id="js迭代器" tabindex="-1"><a class="header-anchor" href="#js迭代器" aria-hidden="true">#</a> js迭代器</h1><p>什么是迭代?</p><div class="custom-container tip"><p class="custom-container-title">什么是迭代?</p><p>大白话讲就是把一个数据集合里的数据一个一个的展示出来。可中断，因为迭代是一个过程，而不是一个结果。 迭代讲的是过程， 而遍历是结果。</p></div><h2 id="迭代对象" tabindex="-1"><a class="header-anchor" href="#迭代对象" aria-hidden="true">#</a> 迭代对象</h2><p>迭代对象都有什么呢？ js内置了迭代接口的对象有如下：</p><ul><li>数组Array</li><li>字符串String</li><li>Map</li><li>Set</li><li>获取到的dom数组（伪数组）</li></ul><p>迭代对象一般使用for...of来进行遍历， 可以说“可以使用forof的对象就是具有迭代接口，就是迭代对象。” 所谓迭代接口就是一个属性<code>Symbol.iterator</code>，不具备这个属性的是不可迭代的 所以我们也就可以手动给一个<code>Object</code>对象赋予了一个<code>Symbol.iterator</code>属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;nickname&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">17</span>
<span class="token punctuation">}</span>

<span class="token comment">// 生成器</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token keyword">this</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 手动赋予一个迭代接口</span>
obj<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span> <span class="token operator">=</span> fn

<span class="token comment">// 这样obj就可以使用for...of了</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> val <span class="token keyword">of</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下: <img src="`+p+`" alt="迭代对象"></p><h2 id="生成器" tabindex="-1"><a class="header-anchor" href="#生成器" aria-hidden="true">#</a> 生成器</h2><p>所谓生成器就是一个函数，但是这个函数有点特殊，它可以返回一个迭代器，而且这个迭代器是可以中断的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token number">1</span>
  <span class="token keyword">yield</span> <span class="token number">2</span>
  <span class="token keyword">yield</span> <span class="token number">3</span>
  <span class="token keyword">yield</span> <span class="token number">4</span>
  <span class="token keyword">yield</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成器函数, function 后面有个*，这个*就是生成器函数的标志.<br> 调用一次生成器函数, 就会返回yield后面的值, 但是生成器函数不会执行, 只有调用生成器函数返回的迭代器的next方法才会执行生成器函数.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>所以箭头函数不能写成生成器函数，因为箭头函数没有*, 也就没有yield关键字。</p></div><p>示例:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token number">1</span>
    <span class="token keyword">yield</span> <span class="token number">2</span>
    <span class="token keyword">yield</span> <span class="token number">3</span>
    <span class="token keyword">yield</span> <span class="token number">4</span>
    <span class="token keyword">yield</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回一个迭代器 打印结果: Object [Generator] {}</span>
<span class="token comment">// 必须使用next()方法才能获取到值</span>
<span class="token keyword">const</span> it <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果: { value: 1, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果: { value: 2, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果: { value: 3, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果: { value: 4, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果: { value: 5, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果: { value: undefined, done: true }</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>注意上面的<code>const it = fn()</code>, 让后续的<code>.next()</code>方法都是在同一个迭代器上调用的, 所以才会有上面的结果. 不要写成下面这样:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果: { value: 1, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果: { value: 1, done: false }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印结果: { value: 1, done: false }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样每一个<code>.next()</code>方法都是在不同的迭代器上调用的, 所以每次都是从头开始执行生成器函数, 所以每次都是返回1.</p></div><p>返回的对象有两个属性:</p><ul><li>value: 生成器函数中yield后面的值</li><li>done: 生成器函数中的yield是否执行完毕, 如果执行完毕, 就是true, 否则就是false</li></ul>`,19),c=[o];function l(i,u){return s(),a("div",null,c)}const k=n(e,[["render",l],["__file","jsIteration.html.vue"]]);export{k as default};
