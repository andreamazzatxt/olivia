import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { getSupabase } from '~/db';

export const useTest = routeLoader$(async (params) => {
  const supabase = getSupabase(params);

  const data = await supabase.from('test').select('*');

  return { data };
});
export default component$(() => {
  const test = useTest();

  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>

      {JSON.stringify(test.value)}
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
